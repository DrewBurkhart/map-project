var map;
var Loc = function(data) {

    var largeInfoWindow = new google.maps.InfoWindow({minWidth:300});
    var bounds = new google.maps.LatLngBounds();

    var self = this;
    this.name = data.title;
    this.lat = data.location.lat;
    this.long = data.location.lng;

    this.visible = ko.observable(true);

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement; 
    }

    var ul = document.getElementById('results');
    ul.onclick = function(event) {
        var target = getEventTarget(event);
        alert(target.innerHTML);
    };

    this.marker = new google.maps.Marker({
        position: new google.maps.LatLng(data.location.lat, data.location.lng),
        title: data.title,
        map: map
    });

    /* TODO: ALLOW LIST TO BE CLICKABLE SO THAT USERS
        CAN FIND THE MARKER BY CLICKING ON THE LIST
        ITEM */
    this.showMarker = ko.computed(function() {
        if(this.visible() === true) {
            this.marker.setMap(map);
        } else {
            this.marker.setMap(null);
        }
        return true;
    }, this);

    // BUG: STREET VIEW DOES NOT POPULATE
    function populateInfoWindow(marker, infowindow) {
        if (infowindow.marker != marker) {
            infowindow.marker = marker;
            infowindow.setContent('');
            infowindow.addListener('closeclick', function() {
                infowindow.marker = null;
            });
            var streetViewService = new google.maps.StreetViewService();
            var radius = 500;
    
            try {
                function getStreetView(data, status) {
                    if (status == google.maps.StreetViewStatus.OK) {
                        console.log("worked")
                        var nearStreetViewLoc = data.location.latLng;
                        var heading = google.maps.geometry.spherical.computeHeading(
                            nearStreetViewLoc, marker.position);
                        infowindow.setContent('<div id="pano"></div>');
                            console.log("still working")
                            var panoramaOptions = {
                                position: nearStreetViewLoc,
                                pov: {
                                    heading: heading,
                                    pitch: 0
                                }
                            };
                        var panorama = new google.maps.StreetViewPanorama(
                            document.getElementById('pano'), panoramaOptions);
                            console.log("loaded")
                    } else {
                        infowindow.setContent('<div>' + marker.title + '</div>' + 
                            '<div>No Street View Found</div>');
                            console.log("didnt work")
                    }
                }
            }
            catch (err) {
                infowindow.setContent('<div>didn\'t work')
            }
    
            streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
    
            infowindow.open(map, marker);
        }
    }

    this.marker.addListener('click', function() {
        populateInfoWindow(this, largeInfoWindow);
    });
}

function mapError() {
    $('#map').html('Google Maps failed. Please try again.');
}

function mapStyles(val) {
    if (val == '1') {
        styles = mapStyles;
    } else if (val == '2') {
        styles = mapStyles2;
    } else {
        styles = null;
    }
}

function MapVM() {
    var self = this;
    var locs = initLocs;
    var styles = styles;

    this.toggleSymbol = ko.observable('hide');
    this.filter = ko.observable('');
    this.locList = ko.observableArray([]);
    this.styles = ko.observable('')

    // Constructor creates a new map -- only center and zoom are required
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.780000, lng: -122.459500},
        zoom: 13,
        if (styles) {
            styles: styles
        },
        mapTypeControl: false
    });
    map.setTilt(45);

    var styleSelector = document.getElementById('styleSelect')

    this.styles = function() {
        if (styleSelector.value == '1') {
            this.styles = mapStyles;
        } else if (styleSelector.value == '2') {
            styles = mapStyles2;
        } else {
            styles = null;
        }
    }

    this.listToggle = function() {
        if(self.toggleSymbol() === 'hide') {
            self.toggleSymbol('show');
        } else {
            self.toggleSymbol('hide');
        }
    };

    // Pushes default locations array into new location list array
    locs.forEach(function(locationItem){
        self.locList.push( new Loc(locationItem));
    });

    // Filters by search bar
    this.filteredList = ko.computed( function() {
        var filter = self.filter().toLowerCase();
        if (!filter) {
            self.locList().forEach(function(locationItem){
                locationItem.visible(true);
            });
            return self.locList();
        } else {
            return ko.utils.arrayFilter(self.locList(), function(locationItem) {
                var string = locationItem.name.toLowerCase();
                var result = (string.search(filter) >= 0);
                locationItem.visible(result);
                return result;
            });
        }
    }, self);


/* TODO: MAKE GROUPS OF LOCATIONS AND ALLOW THEM TO BE SHOWN
    AND HIDDEN BY THE USER */
}

function App() {
    ko.applyBindings(new MapVM());
}
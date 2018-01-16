var map;

function initMap() {

    var styles = mapStyles;

    // Constructor creates a new map -- only center and zoom are required
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.810750, lng: -122.477250},
        zoom: 10,
        // mapTypeId: 'hybrid'
        styles: styles,
        // mapTypeControl: false
    });
    map.setTilt(45);


    var largeInfoWindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();

    for (var n = 0; n < locTypes.length; n++) {
        for (var i = 0; i < locTypes[n].locs[i].length; i++) {
            var position = locTypes[n].locs[i].location;
            var title = locTypes[n].locs[i].title;
            var marker = new google.maps.Marker({
                position: position,
                title: title,
                animation: google.maps.Animation.DROP,
                id: i,
                icon: locTypes[n].locs[i].img
            });
    
            locTypes[n].markers.push(marker);
            bounds.extend(marker.position);
    
            marker.addListener('click', function() {
                populateInfoWindow(this, largeInfoWindow);
            });
        }
    }

    document.getElementById('show-sights').addEventListener('click', showSights);
    document.getElementById('hide-sights').addEventListener('click', hideSights);
    document.getElementById('show-bars').addEventListener('click', showBars);
    document.getElementById('hide-bars').addEventListener('click', hideBars);
    document.getElementById('show-rests').addEventListener('click', showRests);
    document.getElementById('hide-rests').addEventListener('click', hideRests);
    document.getElementById('show-coffee').addEventListener('click', showCoffee);
    document.getElementById('hide-coffee').addEventListener('click', hideCoffee);
}

function populateInfoWindow(marker, infowindow) {
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('');
        infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
        });
        var streetViewService = new google.maps.StreetViewService();
        var radius = 500;

        function getStreetView(data, status) {
            if (status == google.maps.StreetViewStatus.OK) {
                var nearStreetViewLoc = data.location.latLng;
                var heading = google.maps.geometry.spherical.computeHeading(
                    nearStreetViewLoc, marker.position);
                if (data.location.description == "Baker Beach") {
                    heading = 0
                } else if (data.location.description == "AT&T Park") {
                    heading = 90
                }
                infowindow.setContent('<div>' + marker.title + '</div><div id="pano"></div>');
                    var panoramaOptions = {
                        position: nearStreetViewLoc,
                        pov: {
                            heading: heading,
                            pitch: 0
                        }
                    };
                var panorama = new google.maps.StreetViewPanorama(
                    document.getElementById('pano'), panoramaOptions);
            } else {
                infowindow.setContent('<div>' + marker.title + '</div>' + 
                    '<div>No Street View Found</div>');
            }
        }

        streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);

        infowindow.open(map, marker);
    }
}

function showSights() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < sights.length; i++) {
        sightMarkers[i].setMap(map);
        bounds.extend(sightMarkers[i].position);
    }
    map.fitBounds(bounds);
}

function hideSights() {
    for (var i = 0; i < sights.length; i++) {
        sightMarkers[i].setMap(null);
    }
}

function showBars() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < bars.length; i++) {
        barMarkers[i].setMap(map);
        bounds.extend(barMarkers[i].position);
    }
    map.fitBounds(bounds);
}

function hideBars() {
    for (var i = 0; i < bars.length; i++) {
        barMarkers[i].setMap(null);
    }
}

function showRests() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < rests.length; i++) {
        restMarkers[i].setMap(map);
        bounds.extend(restMarkers[i].position);
    }
    map.fitBounds(bounds);
}

function hideRests() {
    for (var i = 0; i < rests.length; i++) {
        restMarkers[i].setMap(null);
    }
}

function showCoffee() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < coffee.length; i++) {
        coffeeMarkers[i].setMap(map);
        bounds.extend(coffeeMarkers[i].position);
    }
    map.fitBounds(bounds);
}

function hideCoffee() {
    for (var i = 0; i < coffee.length; i++) {
        coffeeMarkers[i].setMap(null);
    }
}

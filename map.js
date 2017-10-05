var map;
// Create a blank array for all markers
var brewMarkers = [];
var barMarkers = [];
var restMarkers = [];
var coffeeMarkers = [];

var breweries = [
    {title: 'Copper Kettle', location: {lat: 39.740246, lng: -104.989728}},
    {title: 'Denver Beer Co', location: {lat: 39.740246, lng: -104.989728}},
    {title: 'Grandmas House', location: {lat: 39.740246, lng: -104.989728}},
    {title: 'Dry Dock South', location: {lat: 39.652681, lng: -104.812040}},
    {title: 'Dry Dock North', location: {lat: 39.740246, lng: -104.989728}},
    {title: 'Ale House', location: {lat: 39.740246, lng: -104.989728}},
    {title: '', location: {lat: 39.740246, lng: -104.989728}},
    {title: 'The Source', location: {lat: 39.740246, lng: -104.989728}},
    {title: 'Tap 14', location: {lat: 39.740246, lng: -104.989728}},
    {title: 'Forest Room 5', location: {lat: 39.740246, lng: -104.989728}},
    {title: 'Comrade', location: {lat: 39.740246, lng: -104.989728}},
    {title: 'Great Divide', location: {lat: 39.740246, lng: -104.989728}}
]

var bars = [
    {title: 'Lodos', location: {lat: 33.549817, lng: -117.139526}},
    {title: 'Buffalo Wild Wings', location: {lat: 33.568187, lng: -117.204339}},
    {title: 'Lingers', location: {lat: 33.497864, lng: -117.156708}},
    {title: 'Tap 14', location: {lat: 33.524828, lng: -117.159033}},
    {title: 'The Source', location: {lat: 33.529772, lng: -117.176229}},
    {title: 'Buffalo Wild Wings', location: {lat: 33.554276, lng: -117.179436}},
    {title: 'Garage', location: {lat: 33.482466, lng: -117.143497}}
]

var rests = [
    {title: 'A Carini\'s', location: {lat: 33.557100, lng: -117.201540}},
    {title: 'One Sushi', location: {lat: 33.556702, lng: -117.178050}},
    {title: 'Tonino\'s', location: {lat: 33.565878, lng: -117.212195}}
]

var coffee = [
    {title: 'Starbucks', location: {lat: 33.566305, lng: -117.204511}},
    {title: 'Maui Wowi', location: {lat: 33.504540, lng: -117.151429}}
]

function initMap() {

    var styles = [
{
"featureType": "all",
"elementType": "all",
"stylers": [
    {
        "hue": "#ff0000"
    },
    {
        "saturation": -100
    },
    {
        "lightness": -30
    }
]
},
{
"featureType": "all",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#ffffff"
    }
]
},
{
"featureType": "all",
"elementType": "labels.text.stroke",
"stylers": [
    {
        "color": "#353535"
    }
]
},
{
"featureType": "administrative",
"elementType": "geometry",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "administrative",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "landscape",
"elementType": "geometry",
"stylers": [
    {
        "color": "#656565"
    }
]
},
{
"featureType": "landscape",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "landscape.man_made",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "landscape.natural",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "poi",
"elementType": "geometry.fill",
"stylers": [
    {
        "color": "#505050"
    }
]
},
{
"featureType": "poi",
"elementType": "geometry.stroke",
"stylers": [
    {
        "color": "#808080"
    }
]
},
{
"featureType": "poi",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "poi.attraction",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "poi.park",
"elementType": "labels",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "poi.sports_complex",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "road",
"elementType": "all",
"stylers": [
    {
        "color": "#454545"
    }
]
},
{
"featureType": "road",
"elementType": "labels",
"stylers": [
    {
        "visibility": "simplified"
    },
    {
        "invert_lightness": true
    }
]
},
{
"featureType": "road",
"elementType": "labels.icon",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "road.highway",
"elementType": "labels",
"stylers": [
    {
        "visibility": "simplified"
    },
    {
        "invert_lightness": true
    }
]
},
{
"featureType": "road.highway",
"elementType": "labels.icon",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "labels",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "road.arterial",
"elementType": "labels",
"stylers": [
    {
        "visibility": "simplified"
    }
]
},
{
"featureType": "road.arterial",
"elementType": "labels.icon",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "road.local",
"elementType": "labels",
"stylers": [
    {
        "visibility": "simplified"
    }
]
},
{
"featureType": "road.local",
"elementType": "labels.icon",
"stylers": [
    {
        "visibility": "off"
    }
]
},
{
"featureType": "transit",
"elementType": "labels",
"stylers": [
    {
        "hue": "#ff0000"
    },
    {
        "saturation": 100
    },
    {
        "lightness": -40
    },
    {
        "invert_lightness": true
    },
    {
        "gamma": 1.5
    },
    {
        "visibility": "off"
    }
]
},
{
"featureType": "transit.station",
"elementType": "all",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "transit.station",
"elementType": "labels",
"stylers": [
    {
        "visibility": "off"
    }
]
}
]

    // Constructor creats a new map -- only center and zoom are required
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 39.740246, lng: -104.989728},
        zoom: 10,
        // mapTypeId: 'hybrid'
        styles: styles,
        // mapTypeControl: false
    });
    map.setTilt(45);


    var largeInfoWindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    
    var brewimg = 'img/purple_MarkerW.png';
    var barimg = 'img/blue_MarkerB.png';
    var restimg = 'img/red_MarkerR.png';
    var coffeeimg = 'img/brown_MarkerC.png';

    for (var i = 0; i < breweries.length; i++) {
        var position = breweries[i].location;
        var title = breweries[i].title;
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: brewimg
        });

        brewMarkers.push(marker);
        bounds.extend(marker.position);

        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
        });
    }

    for (var i = 0; i < bars.length; i++) {
        var position = bars[i].location;
        var title = bars[i].title;
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: barimg
        });

        barMarkers.push(marker);
        bounds.extend(marker.position);

        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
        });
    }

    for (var i = 0; i < rests.length; i++) {
        var position = rests[i].location;
        var title = rests[i].title;
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: restimg
        });

        restMarkers.push(marker);
        bounds.extend(marker.position);

        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
        });
    }

    for (var i = 0; i < coffee.length; i++) {
        var position = coffee[i].location;
        var title = coffee[i].title;
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: coffeeimg
        });

        coffeeMarkers.push(marker);
        bounds.extend(marker.position);

        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfoWindow);
        });
    }

    document.getElementById('show-breweries').addEventListener('click', showBreweries);
    document.getElementById('hide-breweries').addEventListener('click', hideBreweries);
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

function showBreweries() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < breweries.length; i++) {
        brewMarkers[i].setMap(map);
        bounds.extend(brewMarkers[i].position);
    }
    // map.fitBounds(bounds);
}

function hideBreweries() {
    for (var i = 0; i < breweries.length; i++) {
        brewMarkers[i].setMap(null);
    }
}

function showBars() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < bars.length; i++) {
        barMarkers[i].setMap(map);
        bounds.extend(barMarkers[i].position);
    }
    // map.fitBounds(bounds);
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
    // map.fitBounds(bounds);
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
    // map.fitBounds(bounds);
}

function hideCoffee() {
    for (var i = 0; i < coffee.length; i++) {
        coffeeMarkers[i].setMap(null);
    }
}

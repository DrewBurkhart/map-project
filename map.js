var map;
// Create a blank array for all markers
var wineMarkers = [];
var barMarkers = [];
var restMarkers = [];
var coffeeMarkers = [];

var wineries = [
    {title: 'South Coast', location: {lat: 33.533774, lng: -117.051810}},
    {title: 'Callaway', location: {lat: 33.524399, lng: -117.089251}},
    {title: 'Leoness Cellars', location: {lat: 33.523958, lng: -117.017651}},
    {title: 'Thornton', location: {lat: 33.519386, lng: -117.089080}},
    {title: 'Miramonte', location: {lat: 33.525575, lng: -117.077964}},
    {title: 'Ponte', location: {lat: 33.536736, lng: -117.050542}},
    {title: 'Falkner', location: {lat: 33.533946, lng: -117.066249}},
    {title: 'Wilson Creek', location: {lat: 33.547217, lng: -117.044748}},
    {title: 'Wiens', location: {lat: 33.538353, lng: -117.047952}},
    {title: 'Renzoni', location: {lat: 33.511751, lng: -117.019438}},
    {title: 'Danza Del Sol', location: {lat: 33.531294, lng: -117.014438}},
    {title: 'Lorimar', location: {lat: 33.539475, lng: -117.058735}}
]

var bars = [
    {title: 'The Shamrock', location: {lat: 33.549817, lng: -117.139526}},
    {title: 'Wings n Things', location: {lat: 33.568187, lng: -117.204339}},
    {title: 'Ballast Point', location: {lat: 33.497864, lng: -117.156708}},
    {title: 'Karl Straus', location: {lat: 33.524828, lng: -117.159033}},
    {title: '8 Bit', location: {lat: 33.529772, lng: -117.176229}},
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
        center: {lat: 33.535400, lng: -117.108700},
        zoom: 12,
        // mapTypeId: 'hybrid'
        styles: styles,
        // mapTypeControl: false
    });
    map.setTilt(45);


    var largeInfoWindow = new google.maps.InfoWindow();
    var bounds = new google.maps.LatLngBounds();
    
    var wineimg = 'img/purple_MarkerW.png';
    var barimg = 'img/blue_MarkerB.png';
    var restimg = 'img/red_MarkerR.png';
    var coffeeimg = 'img/brown_MarkerC.png';

    for (var i = 0; i < wineries.length; i++) {
        var position = wineries[i].location;
        var title = wineries[i].title;
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: wineimg
        });

        wineMarkers.push(marker);
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

    document.getElementById('show-wineries').addEventListener('click', showWineries);
    document.getElementById('hide-wineries').addEventListener('click', hideWineries);
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

function showWineries() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < wineries.length; i++) {
        wineMarkers[i].setMap(map);
        bounds.extend(wineMarkers[i].position);
    }
    // map.fitBounds(bounds);
}

function hideWineries() {
    for (var i = 0; i < wineries.length; i++) {
        wineMarkers[i].setMap(null);
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

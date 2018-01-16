var map;
// Create a blank array for all markers
var sightMarkers = [];
var barMarkers = [];
var restMarkers = [];
var coffeeMarkers = [];
var techMarkers = [];

function initMap() {

    var styles = mapStyles;

    // Constructor creats a new map -- only center and zoom are required
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
    
    var sightimg = 'img/purple_MarkerW.png';
    var barimg = 'img/blue_MarkerB.png';
    var restimg = 'img/red_MarkerR.png';
    var coffeeimg = 'img/brown_MarkerC.png';
    var techimg = 'img/brown_MarkerC.png';

    for (var i = 0; i < sights.length; i++) {
        var position = sights[i].location;
        var title = sights[i].title;
        var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i,
            icon: sightimg
        });

        sightMarkers.push(marker);
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

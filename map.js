var map;
// Create a blank array for all markers
var sightMarkers = [];
var barMarkers = [];
var restMarkers = [];
var coffeeMarkers = [];
var techMarkers = [];

var sights = [
    {title: 'Palace of Fine Arts', location: {lat: 37.802025, lng: -122.448667}},
    {title: 'Pier 39', location: {lat: 37.808724, lng: -122.409810}},
    {title: 'Coit Tower', location: {lat: 37.802420, lng: -122.405822}},
    {title: 'AT&T Park', location: {lat: 37.778637, lng: -122.389259}},
    {title: 'Ghiradelli Square', location: {lat: 37.805910, lng: -122.422939}},
    {title: 'Golden Gate Park', location: {lat: 37.769412, lng: -122.486225}},
    {title: 'Painted Ladies', location: {lat: 37.776293, lng: -122.432758}},
    {title: 'Golden Gate Bridge', location: {lat: 37.810752, lng: -122.477291}},
    {title: 'Lombard Street', location: {lat: 37.802009, lng: -122.419542}},
    {title: 'SF Museum of Modern Art', location: {lat: 37.785794, lng: -122.401055}},
    {title: 'Lands End Labyrinth', location: {lat: 37.788049, lng: -122.505824}},
    {title: 'The Castro Theatre', location: {lat: 37.762059, lng: -122.434784}},
    {title: 'Baker Beach', location: {lat: 37.797552, lng: -122.481992}}
]

var bars = [
    {title: 'Smugglers Cove', location: {lat: 37.779457, lng: -122.423396}},
    {title: 'Buddha Lounge', location: {lat: 37.795313, lng: -122.406670}},
    {title: 'The Buena Vista', location: {lat: 37.806547, lng: -122.420778}},
    {title: 'Final Final', location: {lat: 37.798568, lng: -122.445812}},
    {title: 'The House of Shields', location: {lat: 37.788304, lng: -122.401344}},
    {title: 'The Interval', location: {lat: 37.806629, lng: -122.432167}},
    {title: 'Red\'s Java House', location: {lat: 37.787257, lng: -122.387431}}
]

var rests = [
    {title: 'Saison', location: {lat: 37.779569, lng: -122.392263}},
    {title: 'Leo\'s Oyster Bar', location: {lat: 37.794066, lng: -122.402528}},
    {title: 'Swan Oyster Depot', location: {lat: 37.790929, lng: -122.420987}}
]

var coffee = [
    {title: 'Philz Coffee', location: {lat: 37.789079, lng: -122.393178}},
    {title: 'Wrecking Ball Coffee Roasters', location: {lat: 37.796835, lng: -122.436640}}
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
        center: {lat: 37.740246, lng: -122.989728},
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

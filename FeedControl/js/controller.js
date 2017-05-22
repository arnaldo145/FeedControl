var app = angular.module('contactApp', []);


app.controller('CidadesController', function ($scope) {


//    function initMap() {
//        var locations = [
//            ['Curitibanos', 27.282777777778, 50.584444444444, 1],
//            ['Title B', 3.200848, 101.616669, 2],
//            ['Title C', 3.147372, 101.597443, 3],
//            ['Title D', 3.19125, 101.710052, 4]
//        ];
//        var map = new google.maps.Map(document.getElementById('map'), {
//            zoom: 12,
//            center: new google.maps.LatLng(3.171368, 101.653404),
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        });
//
//        var infowindow = new google.maps.InfoWindow;
//
//        var marker, i;
//
//        for (i = 0; i < locations.length; i++) {
//            marker = new google.maps.Marker({
//                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
//                map: map
//            });
//
//            google.maps.event.addListener(marker, 'click', (function (marker, i) {
//                return function () {
//                    infowindow.setContent(locations[i][0]);
//                    infowindow.open(map, marker);
//                }
//            })(marker, i));
//        }
//    }

    function mapa(){
        
    
    var locations = [
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.923036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 151.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(-33.92, 151.25),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    }
});




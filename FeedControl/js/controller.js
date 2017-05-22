var app = angular.module('contactApp', []);


app.controller('CidadesController', function ($scope, $window) {
  
    $window.map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 8
    });
});




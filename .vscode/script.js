var cities = [{
    city: 'Maharaja Ranjit Singh War Museum, Ludhiana',
    desc: 'War museum with information on historic battles, plus a collection of weapons, armor & uniforms.',
    lat: 30.961022816542787,
    long: 75.82329158398261
}, {
    city: 'Nehru Rose Garden, Ludhiana',
    desc: 'Free WIFI Zone',
    lat: 30.90998945620517,
    long: 75.82481167697252
}, {
    city: 'Gurudwara Nanaksar',
    desc: 'Religious place three time free kitchen langar and rooms for visitors available',
    lat: 30.91716988735449,
    long: 75.87877707697253
}];

//Create angular controller.
var app = angular.module('googleAapApp', []);
app.controller('googleAapCtrl', function($scope) {
    $scope.highlighters = [];
    $scope.gMap = null;

    var winInfo = new google.maps.InfoWindow();

    var googleMapOption = {
        zoom: 4,
        center: new google.maps.LatLng(25, 80),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.gMap = new google.maps.Map(document.getElementById('googleMap'), googleMapOption);



    var createHighlighter = function(citi) {

        var citiesInfo = new google.maps.Marker({
            map: $scope.gMap,
            position: new google.maps.LatLng(citi.lat, citi.long),
            title: citi.city
        });

        citiesInfo.content = '<div>' + citi.desc + '</div>';

        google.maps.event.addListener(citiesInfo, 'click', function() {
            winInfo.setContent('<h1>' + citiesInfo.title + '</h1>' + citiesInfo.content);
            winInfo.open($scope.gMap, citiesInfo);
        });
        $scope.highlighters.push(citiesInfo);
    };

    for (i = 0; i < cities.length; i++) {
        createHighlighter(cities[i]);
    }
});
'use strict';

(function () {
    var app = angular.module("accountSectorApp", ['ngRoute', 'angular-loading-bar']);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/sector", {
            templateUrl: 'app/views/sector.html',
            controller: "SectorCtrl"
        })
        .when("/sector/:sectorId", {
            templateUrl: 'app/views/sectordetail.html',
            controller: "SectorAddressCtrl"
        })
        .otherwise({ redirectTo: "/sector" })
    });
}());

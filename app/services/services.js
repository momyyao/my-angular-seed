/**
 * Created by kwang on 11/21/2015.
 */
'use strict';

angular.module('myApp.services', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/services', {
    templateUrl: 'services/services.html',
    controller: 'ServicesCtrl'
  });
}])

.controller('ServicesCtrl', [function() {

}]);
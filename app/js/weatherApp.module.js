'use strict';
var weatherApp = angular.module('weatherApp', [   
]);

'use strict';

angular.module('weatherApp', [
  'ui.router'
]).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('ìndex', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'weatherCtrl'
    });
    
}).run(function () {

}); 
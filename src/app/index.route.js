(function() {
  'use strict';

  angular
    .module('pln')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('tabs', {
        url: '/plano',
        templateUrl: 'app/tabs/tabs.html',
        controller: 'MainController',
        controllerAs: 'main'
      });


    $urlRouterProvider.otherwise('/');
  }

})();

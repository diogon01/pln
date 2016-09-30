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
      .state('resumo', {
        url: '/',
        templateUrl: 'app/resumo/resumo.html',
        controller: 'ResumoController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

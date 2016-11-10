/**
 * Created by Diogon on 10/11/2016.
 */
(function () {
  'use strict';

  angular
    .module('pln')
    .directive('analiseMercado', analiseMercado);

  /** @ngInject */
  function analiseMercado() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/tabs/mercado.html',
      scope: {
        creationDate: '='
      },
      controller: MercadoController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MercadoController() {
      var vm = this;

      vm.imagePath = 'assets/images/logo-big-black.svg';
    }

  }

})();

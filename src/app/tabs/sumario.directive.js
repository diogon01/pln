/**
 * Created by Diogon on 10/11/2016.
 */
(function () {
  'use strict';

  angular
    .module('pln')
    .directive('sumarioExecutivo', sumarioExecutivo);

  /** @ngInject */
  function sumarioExecutivo() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/tabs/sumario.html',
      scope: {
        creationDate: '='
      },
      controller: SumarioController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SumarioController(moment) {
      var vm = this;

      vm.imagePath = 'assets/images/logo-big-black.svg';
    }

  }

})();

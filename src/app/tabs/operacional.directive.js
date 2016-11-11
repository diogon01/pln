/**
 * Created by Diogon on 11/11/2016.
 */
(function () {
  'use strict';

  angular
    .module('pln')
    .directive('planoOperacional', planoOperacional);

  /** @ngInject */
  function planoOperacional() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/tabs/operacional.html',
      controller: OperacionalController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function OperacionalController() {

    }

  }

})();



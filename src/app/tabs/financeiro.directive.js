/**
 * Created by Diogon on 11/11/2016.
 */
(function () {
  'use strict';

  angular
    .module('pln')
    .directive('planoFinanceiro', planoOFinanceiro);

  /** @ngInject */
  function planoOFinanceiro() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/tabs/financeiro.html',
      controller: FinanceiroController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FinanceiroController() {

    }

  }

})();



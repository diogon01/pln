/**
 * Created by Diogon on 10/11/2016.
 */
/**
 * Created by Diogon on 10/11/2016.
 */
(function () {
  'use strict';

  angular
    .module('pln')
    .directive('planoMarketing', planoMarketing);

  /** @ngInject */
  function planoMarketing() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/tabs/marketing.html',
      controller: MarketingController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MarketingController() {

    }

  }

})();


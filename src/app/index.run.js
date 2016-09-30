(function() {
  'use strict';

  angular
    .module('pln')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();

(function () {
    'use strict';

    angular.module('store').directive('hsBriefProduct', hsProduct);

    function hsProduct() {
        return {
            restrict: 'AE',
            scope: {
                product: '=product',
                remove: '&remove'
            },
            replace: false,
            templateUrl: 'app/product-brief.html'
        };
    }

})();
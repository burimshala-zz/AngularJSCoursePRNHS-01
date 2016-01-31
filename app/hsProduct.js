(function () {
    'use strict';

    angular.module('store').directive('hsProduct', hsProduct);

    function hsProduct() {
        //DDO
        return {
            restrict: 'AE',
            scope: {
                product: '=product',
                onClick: '&onClick'
            },
            link: function(scope, elem, attrs) {
                elem.bind('mouseover', function() {
                    elem.css('cursor', 'pointer');
                });
            },
            replace: false,
            templateUrl: 'app/product.html'
        };
    }

})();
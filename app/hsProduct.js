(function () {
    'use strict';

    angular.module('store').directive('hsProduct', hsProduct);

    function hsProduct() {
        return {
            restrict: 'AE',
            scope: {
                product: '=',
                onClick: '&'
            },
            link: function(scope, elem, attrs) {
                elem.bind('click', function() {
                    elem.css('background-color', 'white');
                    scope.$apply(function() {
                        scope.color = "white";
                    });
                });
                elem.bind('mouseover', function() {
                    elem.css('cursor', 'pointer');
                });
            },
            replace: false,
            templateUrl: 'app/product.html'
        };
    }

})();
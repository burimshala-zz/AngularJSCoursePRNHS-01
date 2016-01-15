(function () {
    'use strict';

    angular.module('store', []);

    angular.module('store').controller('Products', Products);

    function Products() {
        //this is from ng-repeat
        var vm = this;
        vm.all = [];
        vm.buy = buy;

        function buy(product) {

            alert("Thanks for buying : " + product.name);
        }

        var getAllProducts = function () {

            vm.all = [{
                "id": 0,
                "name": "Fantastic Frozen Chips",
                "color": "teal",
                "material": "Fresh",
                "price": "243.47",
                "type": "Chair",
                "thumbnail": "http://lorempixel.com/640/480/technics"
            }, {
                "id": 1,
                "name": "Fantastic Plastic Shirt",
                "color": "lime",
                "material": "Frozen",
                "price": "789.17",
                "type": "Shirt",
                "thumbnail": "http://lorempixel.com/640/480/fashion"
            }, {
                "id": 2,
                "name": "Small Wooden Soap",
                "color": "lime",
                "material": "Plastic",
                "price": "789.67",
                "type": "Towels",
                "thumbnail": "http://lorempixel.com/640/480/transport"
            }, {
                "id": 3,
                "name": "Generic Granite Tuna",
                "color": "plum",
                "material": "Steel",
                "price": "743.50",
                "type": "Ball",
                "thumbnail": "http://lorempixel.com/640/480/food"
            }, {
                "id": 4,
                "name": "Refined Frozen Bike",
                "color": "green",
                "material": "Soft",
                "price": "517.84",
                "type": "Shoes",
                "thumbnail": "http://lorempixel.com/640/480/food"
            }, {
                "id": 5,
                "name": "Practical Concrete Sausages",
                "color": "mint green",
                "material": "Fresh",
                "price": "815.12",
                "type": "Car",
                "thumbnail": "http://lorempixel.com/640/480/cats"
            }, {
                "id": 6,
                "name": "Small Concrete Cheese",
                "color": "indigo",
                "material": "Frozen",
                "price": "562.29",
                "type": "Ball",
                "thumbnail": "http://lorempixel.com/640/480/technics"
            }, {
                "id": 7,
                "name": "Licensed Soft Towels",
                "color": "green",
                "material": "Rubber",
                "price": "247.63",
                "type": "Sausages",
                "thumbnail": "http://lorempixel.com/640/480/nature"
            }, {
                "id": 8,
                "name": "Incredible Granite Mouse",
                "color": "green",
                "material": "Fresh",
                "price": "736.60",
                "type": "Soap",
                "thumbnail": "http://lorempixel.com/640/480/business"
            }, {
                "id": 9,
                "name": "Fantastic Fresh Fish",
                "color": "maroon",
                "material": "Rubber",
                "price": "16.30",
                "type": "Computer",
                "thumbnail": "http://lorempixel.com/640/480/people"
            }, {
                "id": 10,
                "name": "Awesome Fresh Chips",
                "color": "sky blue",
                "material": "Granite",
                "price": "26.51",
                "type": "Fish",
                "thumbnail": "http://lorempixel.com/640/480/animals"
            }, {
                "id": 11,
                "name": "Intelligent Soft Bike",
                "color": "lime",
                "material": "Concrete",
                "price": "880.93",
                "type": "Shoes",
                "thumbnail": "http://lorempixel.com/640/480/technics"
            }, {
                "id": 12,
                "name": "Rustic Plastic Pizza",
                "color": "silver",
                "material": "Steel",
                "price": "2.28",
                "type": "Keyboard",
                "thumbnail": "http://lorempixel.com/640/480/people"
            }, {
                "id": 13,
                "name": "Tasty Fresh Mouse",
                "color": "ivory",
                "material": "Soft",
                "price": "234.64",
                "type": "Soap",
                "thumbnail": "http://lorempixel.com/640/480/business"
            }, {
                "id": 14,
                "name": "Unbranded Plastic Towels",
                "color": "cyan",
                "material": "Metal",
                "price": "458.85",
                "type": "Cheese",
                "thumbnail": "http://lorempixel.com/640/480/people"
            }, {
                "id": 15,
                "name": "Rustic Rubber Car",
                "color": "silver",
                "material": "Fresh",
                "price": "76.79",
                "type": "Car",
                "thumbnail": "http://lorempixel.com/640/480/cats"
            }];
            return vm.all;
        }

        getAllProducts();
    }

})();
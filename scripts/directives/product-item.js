
angular
    .module("whatapop")
    .directive("productItem",function (ProductServ) {
        return {
            restrict: "EA",
            templateUrl: "views/directives/product-item.html",
            scope: {
                product: "<"
            },
            link: function (scope) {
                scope.getImageAbsolutePath = ProductServ.getImageAbsolutePath;
            }
        };
    });

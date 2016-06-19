
angular
    .module("whatapop")
    .component("root", {
        $routeConfig: [{
            name: "Products",
            path: "/products",
            component: "products",
            useAsDefault: true
        },{
            name: "ProductDetail",
            path: "/products/:id",
            component: "productDetail"
        }],
        templateUrl: "views/root.html"
    });

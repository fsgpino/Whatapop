
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
        },{
            name: "UserSignup",
            path: "/users/signup",
            component: "userSignup"
        }],
        templateUrl: "views/root.html"
    });

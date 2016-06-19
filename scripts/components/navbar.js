
angular
    .module("whatapop")
    .component("navbar", {
        bindings: {
            $router: "<"
        },
        templateUrl: "views/navbar.html"
    });

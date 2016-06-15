
angular
    .module("whatapop")
    .component("root", {
        $routeConfig: [{
            name: "Main",
            path: "/",
            useAsDefault: true
        }],
        templateUrl: "views/root.html"
    });

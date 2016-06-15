
// Setter de los modulos.
angular
    .module("whatapop", [
        "ngComponentRouter"
    ]);

// Configuramos el proveedor '$locationProvider'. Establecemos el
// modo de navegación HTML5 para que funcione el Single Page Application.
angular
    .module("whatapop")
    .config(function($locationProvider) {
        $locationProvider.html5Mode(true);
    });

// En el value '$routerRootComponent' indicamos el componente raíz.
angular
    .module("whatapop")
    .value("$routerRootComponent", "raiz");

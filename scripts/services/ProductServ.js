
angular
    .module("whatapop")
    .service("ProductServ",  function ($http, $filter, Settings) {

        // Definición de los endpoints del servicio
        var endpoint = Settings.urlServer + Settings.endpoints.products;

        // Obtención de todos los productos del servidor
        this.getProducts = function () {
            return $http
                .get(endpoint)
                .then(function (res) {
                    return res.data;
                });
        }

        // Obtención de todos los productos del servidor correspondientes a varios usuarios
        this.getUsersProducts = function (users) {
            return $http
                .get(endpoint)
                .then(function (res) {
                    return $filter("filter")(res.data, function (product) {
                        return users.map(function(e) { return e.id; }).indexOf(product.seller.id) > -1;
                    });
                });
        }

        // Obtención de todos los productos del servidor correspondientes a un usuario
        this.getUserProducts = function (user) {
            return $http
                .get(endpoint)
                .then(function (res) {
                    return $filter("filter")(res.data, {"seller": {"id": user.id}});
                });
        }

        // Obtención de un producto del servidor dado su ID
        this.getProduct = function (productId) {
            return $http
                .get(endpoint + "/" + productId)
                .then(function (res) {
                    return res.data;
                });
        }

        // Obtención el path para la obtención de las imagenes del servidor
        this.getImageAbsolutePath = function (path) {
            return path ? (Settings.urlServer + "/" +  path) : undefined;
        }

        // Dado un listado de productos realiza una busqueda por nombre en estos
        this.searchInProducts = function (products, textSearch) {
            return $filter("filter")(products, {"name": textSearch});
        }

    });

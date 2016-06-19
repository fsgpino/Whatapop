
angular
    .module("whatapop")
    .service("CategoryServ",  function ($http, Settings) {

        // Definición del endpoint del servicio
        var endpoint = Settings.urlServer + Settings.endpoints.categories;

        // Obtención de todas las categorías del servidor
        this.getCategories = function () {
            return $http
                .get(endpoint)
                .then(function (res) {
                    return res.data;
                });
        }

    });

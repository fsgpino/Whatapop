
angular
    .module("whatapop")
    .service("UserServ",  function ($http, $haversine, Settings) {

        // Definición de los endpoints del servicio
        var endpoint = Settings.urlServer + Settings.endpoints.users;
        var imagesEndpoint = Settings.urlServer + Settings.endpoints.images;

        // Obtención de todos los usuarios del servidor
        this.getUsers = function () {
            return $http
                .get(endpoint)
                .then(function (res) {
                    return res.data;
                });
        }

        // Obtención de todos los usuarios del servidor que esten a menos del radio y ubicación especificados
        this.getNearUsers = function (location, radio) {
            return $http
                .get(endpoint)
                .then(function (res) {
                    return res.data.reduce(function(selected, user) {
                        if ($haversine.distance({"latitude": user.latitude, "longitude": user.longitude }, location) < radio) {
                            selected.push(user);
                        }
                        return selected;
                    }, []);
                });
        }

        // Obtención de un usuario del servidor dado su ID
        this.getUser = function (userId) {
            return $http
                .get(endpoint + "/" + userId)
                .then(function (res) {
                    return res.data;
                });
        }

        // Guardar un usuario en el servidor
        this.saveUser = function (user, image) {

            var promise;

            if (image) {
                // Si la imagen viene dada.

                // Montamos un 'FormData' con la imagen.
                var data = new FormData();
                data.append("img", image);

                // Configuramos el 'Content-Type' de la petición.
                // Tenemos que indicarlo como 'undefined' para que
                // AngularJS infiera el tipo de la petición.
                var settings = {
                    "headers": {
                        "Content-Type": undefined
                    }
                };

                // Subimos la imagen al servidor.
                promise = $http
                    .post(imagesEndpoint, data, settings)
                    .then(function(res) {

                        // En la propiedad 'path' me viene dada
                        // la ruta relativa de la imagen subida.
                        var path = res.data.path;

                        // Establecemos la ruta de la imagen en
                        // el objeto user antes de guardarlo.
                        user.avatar = path;

                        return $http
                            .post(endpoint, user);
                    });

            } else {
                // En caso de no haber indicado una imagen.

                promise = $http
                    .post(endpoint, user);

            }

            return promise;

        }

        // Obtención el path para la obtención de las imagenes del servidor
        this.getImageAbsolutePath = function (path) {
            return path ? (Settings.urlServer + "/" +  path) : undefined;
        }

    });

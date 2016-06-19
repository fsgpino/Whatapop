
angular
    .module("whatapop")
    .service("LocationServ",  function ($q) {

        // Obtención de la ubicación del usuario
        this.getLocation = function () {
            var deferred = $q.defer();
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function (data) {
                    deferred.resolve(data.coords);
                },function () {
                    deferred.reject("El usuario no autorizó la ubicación.");
                });
            } else {
                deferred.reject("El navegador es incompatible.");
            }
            return deferred.promise;
        }
    });

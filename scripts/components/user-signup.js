
angular
    .module("whatapop")
    .component("userSignup", {
        bindings: {
            $router: '<'
        },
        templateUrl: "views/user-signup.html",
        controller: function (LocationServ, UserServ) {

            var self = this;

            self.save = function (user) {

                LocationServ
                    .getLocation()
                    .then(function (location) {
                        user.latitude = location.latitude;
                        user.longitude = location.longitude;
                        UserServ.saveUser(user).then(function (res) {
                            alert("¡Registrado! Gracias por registrarte.");
                            self.$router.navigate(['Products']);
                        }).catch(function (err) {
                           alert(err);
                        });
                    }).catch(function (err) {
                        user.latitude = 40.41684;
                        user.longitude = -3.702278;
                        UserServ.saveUser(user).then(function (res) {
                            alert("¡Registrado! Gracias por registrarte. No hemos podido obtener tu ubicación, así que se ha guardado una localización por defecto.");
                            self.$router.navigate(['Products']);
                        }).catch(function (err) {
                            alert(err);
                        });
                    });

            }

        }
    });

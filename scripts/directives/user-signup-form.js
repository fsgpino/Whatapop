
angular
    .module("whatapop")
    .directive("userSignupForm",function () {
        return {
            restrict: "EA",
            templateUrl: "views/directives/user-signup-form.html",
            scope: {
                "saveUser": "&"
            },
            link: function (scope) {

                scope.newUser = {};

                scope.imageSelected = function(file) {
                    scope.newUser.avatar = file;
                };

                scope.imageDeselected = function() {
                    scope.newUser.avatar = undefined;
                };

                scope.save = function () {
                    if(scope.signup.$valid){
                        scope.newUser.name = scope.name;
                        scope.newUser.nick = scope.nickname;
                        scope.newUser.email = scope.email;
                        scope.saveUser({user: scope.newUser});
                    } else {
                        alert("Compruebe los datos introducidos, algún campo está incompleto o es incorrecto.");
                    }
                };

            }
        }
    });

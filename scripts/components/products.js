
angular
    .module("whatapop")
    .component("products", {
        bindings: {
            $router: "<"
        },
        templateUrl: "views/products.html",
        controller: function (CategoryServ, ProductServ, LocationServ, UserServ) {

            var self = this;

            self.categorySelected = '';
            self.search = '';
            self.locationMeters = 0;

            self.$routerOnActivate = function (req) {

                self.search = req.params.search;

                CategoryServ
                    .getCategories()
                    .then(function (res) {
                        self.categories = res;
                    });

                self.getProducts();
                
            };

            self.getProducts = function () {

                if (self.locationMeters > 0) {

                    // Se obtienen los productos basandose en la localzación y busqueda del usuario
                    LocationServ
                        .getLocation()
                        .then(function (location) {
                            UserServ.getNearUsers(location,self.locationMeters).then(function (res) {
                                ProductServ.getUsersProducts(res).then(function (res) {
                                    if(self.search) {
                                        self.products = ProductServ.searchInProducts(res,self.search);
                                    } else {
                                        self.products = res;
                                    }
                                }).catch(function (err) {
                                    alert(err);
                                });
                            }).catch(function (err) {
                                alert(err);
                            });
                        }).catch(function (err) {
                        alert(err);
                    });

                } else {

                    // Se obtienen los productos basandose en la busqueda del usuario unicamente
                    ProductServ
                        .getProducts()
                        .then(function (res) {
                            if(self.search) {
                                self.products = ProductServ.searchInProducts(res,self.search);
                            } else {
                                self.products = res;
                            }
                        });

                }
            }
        }
    });

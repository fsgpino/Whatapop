
angular
    .module("whatapop")
    .component("productDetail", {
        bindings: {
            $router: '<'
        },
        templateUrl: "views/product-detail.html",
        controller: function ($sce, ProductServ, UserServ) {

            var self = this;

            self.location = [40.41684, -3.702278];

            self.$routerOnActivate = function (req) {

                self.interests = JSON.parse(localStorage.getItem('interestingProducts')) || [];

                ProductServ
                    .getProduct(req.params.id)
                    .then(function (res) {

                        self.product = res;
                        self.description = $sce.trustAsHtml(self.product.description);

                        UserServ
                            .getUser(self.product.seller.id)
                            .then(function (res) {
                                self.user = res;
                                self.location = [self.user.latitude || 40.41684, self.user.longitude || -3.702278];
                            });

                    });

            };

            self.getImageAbsolutePath = ProductServ.getImageAbsolutePath;

            self.interesting = function (productId) {

                self.interests.push(productId);

                localStorage.setItem('interestingProducts',JSON.stringify(self.interests));

            };

            self.notInteresting = function (productId) {

                var index = self.interests.indexOf(productId);

                if(index != -1) {
                    self.interests.splice(index, 1);
                }

                localStorage.setItem('interestingProducts',JSON.stringify(self.interests));

            };

        }
    });

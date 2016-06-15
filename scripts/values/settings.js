
angular
    .module("whatapop")
    .value("Settings", {
        urlServer: "http://localhost:8000",
        endpoints: {
            categories: "/api/categories",
            products: "/api/products",
            users: "/api/users",
            images: "/upload"
        }
    });

var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider  
    .when("/a", { templateUrl: "page1.html" })
    .when("/b", { templateUrl: "page2.html" })
    .when("/c", { templateUrl: "page3.html" })
    .when("/d", { templateUrl: "page4.html" })
    .when("/e", { templateUrl: "page5.html" })
    .when("/f", { templateUrl: "page6.html" })
});

app.controller("testController", function ($scope, $http) {
  $http.get("/json/Succulents2.json").then(function (response) {
    $scope.data1 = response.data.page1;
  });
  $scope.addToCart = function (item) {
    var productInfo = {
        id: item.id,
        product: item.name,
        price: item.price,
        img: item.img,
        code: item.discountCode
    };

    var productList = JSON.parse(localStorage.getItem('product_list')) || [];

    var existingProduct = productList.find(function (product) {
        return product.id === item.id;
    });

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        productInfo.quantity = 1;
        productList.push(productInfo);
    }

    localStorage.setItem('product_list', JSON.stringify(productList));
};
});

app.controller("page1Controller", function ($scope, $http) {
  $http.get("/json/Succulents2.json").then(function (response) {
    $scope.data2 = response.data.page1;
  });
  $scope.addToCart = function (item) {
    var productInfo = {
        id: item.id,
        product: item.name,
        price: item.price,
        img: item.img,
        code: item.discountCode
    };

    var productList = JSON.parse(localStorage.getItem('product_list')) || [];

    var existingProduct = productList.find(function (product) {
        return product.id === item.id;
    });

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        productInfo.quantity = 1;
        productList.push(productInfo);
    }

    localStorage.setItem('product_list', JSON.stringify(productList));
};
});

app.controller("page2Controller", function ($scope, $http) {
  $http.get("/json/Succulents2.json").then(function (response) {
    $scope.data3 = response.data.page2;
  });
  $scope.addToCart = function (item) {
    var productInfo = {
        id: item.id,
        product: item.name,
        price: item.price,
        img: item.img,
        code: item.discountCode
    };

    var productList = JSON.parse(localStorage.getItem('product_list')) || [];

    var existingProduct = productList.find(function (product) {
        return product.id === item.id;
    });

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        productInfo.quantity = 1;
        productList.push(productInfo);
    }

    localStorage.setItem('product_list', JSON.stringify(productList));
};
});

app.controller("page3Controller", function ($scope, $http) {
  $http.get("/json/Succulents2.json").then(function (response) {
    $scope.data4 = response.data.page3;
  });
});
app.controller("page4Controller", function ($scope, $http) {
  $http.get("/json/Succulents2.json").then(function (response) {
    $scope.data5 = response.data.page4;
  });
  $scope.addToCart = function (item) {
    var productInfo = {
        id: item.id,
        product: item.name,
        price: item.price,
        img: item.img,
        code: item.discountCode
    };

    var productList = JSON.parse(localStorage.getItem('product_list')) || [];

    var existingProduct = productList.find(function (product) {
        return product.id === item.id;
    });

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        productInfo.quantity = 1;
        productList.push(productInfo);
    }

    localStorage.setItem('product_list', JSON.stringify(productList));
};
});
app.controller("page5Controller", function ($scope, $http) {
  $http.get("/json/Succulents2.json").then(function (response) {
    $scope.data6 = response.data.page5;
  });
  $scope.addToCart = function (item) {
    var productInfo = {
        id: item.id,
        product: item.name,
        price: item.price,
        img: item.img,
        code: item.discountCode
    };

    var productList = JSON.parse(localStorage.getItem('product_list')) || [];

    var existingProduct = productList.find(function (product) {
        return product.id === item.id;
    });

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        productInfo.quantity = 1;
        productList.push(productInfo);
    }

    localStorage.setItem('product_list', JSON.stringify(productList));
};
});
app.controller("page6Controller", function ($scope, $http) {
  $http.get("/json/Succulents2.json").then(function (response) {
    $scope.data7 = response.data.page6;
  });
  $scope.addToCart = function (item) {
    var productInfo = {
        id: item.id,
        product: item.name,
        price: item.price,
        img: item.img,
        code: item.discountCode
    };

    var productList = JSON.parse(localStorage.getItem('product_list')) || [];

    var existingProduct = productList.find(function (product) {
        return product.id === item.id;
    });

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        productInfo.quantity = 1;
        productList.push(productInfo);
    }

    localStorage.setItem('product_list', JSON.stringify(productList));
};
});

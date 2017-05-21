app.controller("LoginController", function ($scope, $http, $location, $cookies) {

    $scope.loginUser = function () {
        if ($scope.login.usuario == "test" && $scope.login.password == "test") {
            $cookies.put("session","ok");
            $location.path("/");
        }else{
            $cookies.put("session", "false");
        }
        
    }


});

    


    
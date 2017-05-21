app.controller('mainController', function ($scope, $http, blockUI,$cookies) {
    
    if ($cookies.get("session") == "ok") {
        $scope.flag = true;
    } else {
        $scope.flag = false;
    }

    $scope.message = "StackOver Flow Preguntas...";
    blockUI.start();
    $scope.questions = [];
    $scope.loading = true;
    $http.get("http://" + hostApp + "/api/stack/questions")
            .success(
                    function (data) {
                        var resultados = JSON.parse(data);
                        $scope.questions = resultados.items;
                       blockUI.stop();
                    }).error(function (err) {
                        //$log.error("ERROR Find Questions" + err);
                        blockUI.stop();
                        $scope.loading = false;
                    });

   
});
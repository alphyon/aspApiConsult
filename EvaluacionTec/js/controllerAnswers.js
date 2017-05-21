app.controller('AnswersController', function ($scope, $http, $routeParams, $sce, blockUI, $cookies) {
    $scope.message = "StackOver Flow Preguntas...";
    if ($cookies.get("session") == "ok") {
        $scope.flag = true;
    } else {
        $scope.flag = false;
    }
    blockUI.start();
    $scope.loading = true;
    $scope.questions = [];
    $scope.bodyRes = [];
    $http.get("http://" + hostApp + "/api/stack/answers/" + $routeParams.id + "/")
            .success(
                     function (data) {
                         var resultados = JSON.parse(data);
                         $scope.answers = resultados.items;
                         for (var i = 0; i < resultados.items.length; i++) {
                             $scope.answers[i].body = $sce.trustAsHtml($scope.answers[i].body);
                         }
                         blockUI.stop();
                     }).error(function (err) {
                         //$log.error("ERROR Find Questions" + err);
                         blockUI.stop();
                         $scope.loading = false;
                    });


});
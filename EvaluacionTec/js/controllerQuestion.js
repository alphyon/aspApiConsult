app.controller('QuestController', function ($scope, $http, $routeParams, $sce, blockUI, $uibModal, $cookies) {
    if ($cookies.get("session") == "ok") {
        $scope.flag = true;
    } else {
        $scope.flag = false;
    }
    $scope.message = "StackOver Flow Preguntas...";
    blockUI.start();
    $scope.loading = true;
    $http.get("http://" + hostApp + "/api/stack/quest/" + $routeParams.id + "/")
            .success(
                    function (data) {
                        var resultado = JSON.parse(data);
                        $scope.titleQuest = resultado.items[0].title;
                        $scope.htmlBody = $sce.trustAsHtml(resultado.items[0].body);
                        blockUI.stop();
                    }).error(function (err) {
                        //$log.error("ERROR Find Questions" + err);
                        blockUI.stop();
                        $scope.loading = false;
                    });
    $scope.showModal = function () {
        $uibModal.open({
            templateUrl: 'myModal.html',
            controller: 'ModalDialogController',
        })
    };


}).controller("ModalDialogController", function ($scope, $uibModalInstance) {
    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
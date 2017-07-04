/**
 * myapp Module
 *
 * Description
 */
angular.module('myapp')
    .controller('HomeController', ['$scope', 'RepoFacotry', '$auth', function($scope, RepoFacotry, $auth) {
        $auth.authenticate('github');
        RepoFacotry.getAllRepo(function(response) {
            $scope.result = response.data;
        });
    }])
    .controller('RepoDetailController', ['$scope', 'RepoFacotry', '$routeParams', function($scope, RepoFacotry, $routeParams) {
        var repoOwnerName = $routeParams.name.replace('_', '/');
        RepoFacotry.getData(repoOwnerName, function(response) {
            $scope.result = response.data;

        });

        $scope.dynamicCall = function(url) {
            return "fuck";

            // RepoFacotry.getDetails(url,function(data){
            // 	console.log(data);
            // });
        }

    }])
    .controller('RepoCommentController', ['$scope', 'RepoFacotry', '$routeParams', function($scope, RepoFacotry, $routeParams) {
        var repoComment = $routeParams.name.replace('_', '/');
        RepoFacotry.getComment(repoComment, function(response) {
            $scope.result = response.data;
        });
    }]);

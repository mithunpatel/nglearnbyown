/**
 * myApp Module
 *
 * Description
 */
angular.module('myapp')
    .factory('RepoFacotry', ['$http', function($http) {
        var getAllRepo = function(callback) {
            $http.get("https://api.github.com/repositories").then(callback);
        }
        var getData = function(name, callback) {
            $http.get("https://api.github.com/repos/" + name).then(callback);
        }
        var getDetails = function(url, callback) {
            $http.get(url).then(callback);
        }
        var getComment = function(name, callback) {
            $http.get("https://api.github.com/repos/" + name + "/comments").then(callback);
        }
        return {
            getAllRepo: getAllRepo,
            getData: getData,
            getComment: getComment,
            getDetails: getDetails
        };
    }])

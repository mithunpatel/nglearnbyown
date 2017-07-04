/**
 * myApp Module
 *
 * Description
 */
angular.module('myapp', ['ngRoute', 'satellizer'])
    .config(['$routeProvider', '$locationProvider', '$authProvider', function($routeProvider, $locationProvider, $authProvider) {

        $routeProvider.when("/", {
                templateUrl: "./scripts/views/home.html",
                controller: "HomeController"
            })
            .when("/details/:name", {
                templateUrl: "./scripts/views/repoDetails.html",
                controller: "RepoDetailController"
            })
            .when("/comments/:name", {
                templateUrl: "./scripts/views/comments.html",
                controller: "RepoCommentController"
            })
            .otherwise("/");

        $authProvider.github({
            url: '/auth/github',
            authorizationEndpoint: 'https://github.com/login/oauth/authorize',
            redirectUri: window.location.origin,
            clientId: "390a9a6b5376468ea4ff",
            scopeDelimiter: ' ',
            oauthType: '2.0',
            popupOptions: { width: 1020, height: 618 }
        });

        //console.log($authProvider);
        $locationProvider.html5Mode(true);
    }])

namespace myapp {

    angular.module('myapp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: myapp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('addbook', {
                url: '/addbook',
                templateUrl: '/ngApp/views/addbook.html',
                controller: myapp.Controllers.AddBookController,
                controllerAs: 'vm'
            })
            .state('addsite', {
                url: '/addsite',
                templateUrl: '/ngApp/views/addsite.html',
                controller: myapp.Controllers.AddSiteController,
                controllerAs: 'vm'
            })
            .state('editbook', {
                url: '/editbook/:id',
                templateUrl: '/ngApp/views/editbook.html',
                controller: myapp.Controllers.EditBookController,
                controllerAs: 'vm'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: myapp.Controllers.UserController,
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: myapp.Controllers.LogInController,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}

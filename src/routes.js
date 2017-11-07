angular
  .module('app')
  .config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/search');

  $stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'app/search.html',
      controller: 'SearchController',
      controllerAs: 'vm'
    })
    .state('detail', {
      url: '/detail',
      params: {
        result: null
      },
      templateUrl: 'app/detail.html',
      controller: 'DetailController',
      controllerAs: 'vm'
    });
}

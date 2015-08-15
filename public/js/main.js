angular.module('contatooh', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('meuInterceptor');

    $routeProvider
      .when('/contatos', {
        templateUrl: 'partials/contatos.html',
        controller: 'ContatosController'
      })
      .when('/contato/:contatoId', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
      })
      .when('/contato', {
        templateUrl: 'partials/contato.html',
        controller: 'ContatoController'
      })
      .when('/auth', {
        templateUrl: 'partials/auth.html'
      })
      .otherwise({
        redirectTo: '/contatos'
      });
  });

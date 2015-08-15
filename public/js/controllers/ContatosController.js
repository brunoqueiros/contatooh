angular.module('contatooh').controller('ContatosController',
  function ($scope, $resource, Contato) {
    $scope.contatos = [];
    $scope.filtro = '';
    $scope.mensagem = {texto: ''};

    function buscaContatos() {
      Contato.query(
        function (contatos) {
          $scope.contatos = contatos;
          $scope.mensagem = {};
        },
        function (erro) {
          console.log(erro);
          $scope.mensagem = {
            texto: "Não foi possível obter a lista de contatos"
          };
        }
      );
    }

    buscaContatos();

    $scope.incrementa = function () {
      $scope.total++;
    };

    $scope.remove = function (contato) {
      Contato.delete({
        id: contato._id
      }, buscaContatos, function (erro) {
        console.log(erro);
        $scope.mensagem = {
            texto: "Não foi possível remover o contato"
          };
      });
    };
  }
);

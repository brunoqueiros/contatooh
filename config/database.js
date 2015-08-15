var mongoose = require('mongoose');

mongoose.set('debug', true);

module.exports = function (uri) {
  mongoose.connect(uri);

  mongoose.connection.on('connected', function () {
    console.log('Mongoose! Conectado em ' + uri);
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose! Desconectado de ' + uri);
  });

  mongoose.connection.on('error', function () {
    console.log('Mongoose! Erro na conexão: ' + uri);
  });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Mongoose! Desconectado pelo termino da aplicação');

      // 0 indica que a finalização ocorreu sem erros
      process.exit(0);
    });
  });
};

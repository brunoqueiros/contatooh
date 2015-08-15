var ContatosPage = new require('./pages/contatosPage');

describe('Pagina principal', function () {
  var pagina = new ContatoPage();

  beforeEach(function () {
    pagina.visitar();
  });

  it('Deve estar logado', function () {
    pagina.obterUsuarioLogado().then(function (texto) {
      expect(texto.trim().length.toBeGreaterThan(0));
    });
  });

  it('Deve remover um contato da lista', function () {
    var totalAntes = pagina.obterTotalDeItensDaLista();
    pagina.removerPrimeiroItemDaLista();
    var totalDepois = pagina.obterTotalDeItensDaLista();
    expect(totalDepois).toBeLessThan(totalAntes);
  });
});

module.exports = class Cliente {

  constructor(qtdContas, qtdPagas, tempoTotal, nome) {
    
    this.qtdContas = qtdContas;
    this.qtdPagas = qtdPagas;
    this.tempoTotal = tempoTotal;
    this.nome = nome;
  }
}
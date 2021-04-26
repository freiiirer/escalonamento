module.exports = class Cliente {

  constructor(qtdContas, qtdPagas, tempoTotal, nome, prioridade) {
    this.qtdContas = qtdContas;
    this.qtdPagas = qtdPagas;
    this.tempoTotal = tempoTotal;
    this.nome = nome;
    this.prioridade = prioridade;
  }
}
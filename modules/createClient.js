const prompt = require('../utils/Prompt')
const Cliente = require('../models/Cliente')

module.exports = () => {
  const quantidadeContas = prompt.getNumber('Qual a quantidade total de contas a serem pagas: ')
  const nome = prompt.getText('Digite o nome do cliente: ')
  const prioridade = prompt.getNumber('Digite a prioridade do cliente: (1-alta prioridade  0-baixa prioridade)')
  return new Cliente(quantidadeContas, 0, 0, nome, prioridade);
}
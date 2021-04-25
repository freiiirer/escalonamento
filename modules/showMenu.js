const prompt = require('../utils/Prompt')


module.exports = () => {
  console.clear()
  console.log('1- Inserir')
  console.log('2- Mostrar')
  console.log('3- Escalonamento Circular')
  console.log('4- Escalonamento Circular com Prioridade')
  console.log('5- Sair\n')

  let option = prompt.getNumber('Digite sua opção: ')
  console.clear()
  return option;
}

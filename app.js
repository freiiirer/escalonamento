const prompt = require('./utils/Prompt')
const createClient = require('./modules/createClient')
const showTasks = require('./modules/showTasks')
const showMenu = require('./modules/showMenu')
const escalonamento = require('./modules/escalonamento')
const escalonamentoPrioridade = require('./modules/escalonamentoPrioridade')

const qtdContas = prompt.getNumber('qual o numero de contas a serem pagas por ciclo: ');

const fila = [];

menu:
do {
  const option = showMenu()

  switch (option) {
    case 1:
      const client = createClient()
      fila.push(client)
      break;
    case 2:
      showTasks(fila)
      prompt.getText('Pressione ENTER para continuar...')

      break;
    case 3:
      {
        const resultado = escalonamento(fila, qtdContas);
        console.log(resultado)
        prompt.getText('Pressione ENTER para continuar...')
        break;
      }
    case 4:
      {
        fila.sort(escalonamentoPrioridade)
        console.log(fila)
        prompt.getText('Pressione ENTER para continuar...')
        const resultado = escalonamento(fila, qtdContas);
        console.log(resultado)
        prompt.getText('Pressione ENTER para continuar...')
        break;
      }
    case 5:
      break menu;
  }
} while (true)
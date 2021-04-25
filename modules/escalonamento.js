function processaResultado(fila) {
  fila.forEach(cliente => {
    cliente.turnaround = cliente.tempoTotal - 0
    cliente.waitingTime = cliente.tempoTotal - cliente.qtdContas
  })
  const turnaroundTotal = fila.reduce((valorAtual,cliente)=>{
    return valorAtual + cliente.turnaround
  },0)

  const totalWaiting = fila.reduce((valorAtual,cliente)=>{
    return valorAtual + cliente.waitingTime
  },0)

  const totalProcess = fila.reduce((valorAtual,cliente)=>{
    return valorAtual + cliente.qtdContas
  },0)

  const turnaroundMedia = turnaroundTotal / fila.length;

  const mediaWaiting = totalWaiting / fila.length;

  return {
    turnaroundTotal,
    totalWaiting,
    totalProcess,
    turnaroundMedia,
    mediaWaiting,
    fila
  }
}

module.exports = (fila, qtdContas) => {
  const arrayResultados = []
  let tempo = 0;
  while (fila.length > 0) {
    tempo += qtdContas;
    const cliente = fila.shift()
    cliente.qtdPagas += qtdContas
    if (cliente.qtdPagas >= cliente.qtdContas) {
      cliente.tempoTotal = tempo;
      arrayResultados.push(cliente)
    } else {
      fila.push(cliente)
    }
  }
  return processaResultado(arrayResultados)
}
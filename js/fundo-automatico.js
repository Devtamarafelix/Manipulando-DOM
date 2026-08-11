// Função para atualizar o fundo de forma automática
function atualizarFundoAutomatico() {
  // Pegando a data atual
  const date = new Date()

  // pegando a hora atual em tempo real
  const hora = date.getHours()

  // Reseto o fundo antes pra imagem da manhã não sobrescrever as outras
  document.body.style.backgroundImage = "none"

  // Se for de manhã (6h até 11h59), coloca a imagem
  if (hora >= 6 && hora < 12) {
    document.body.style.backgroundImage = "url('./assets/imagem-manha.jpg')"
    document.body.style.backgroundSize = "cover"

  // Se for de tarde (12h até 17h59), coloca o gradiente de tarde
  } else if (hora >= 12 && hora < 18) {
    document.body.style.background = "linear-gradient(145deg, #FF8A65, #FFB74D, #64B5F6)"

  // Se for de noite (18h até 23h59), coloca o gradiente noturno
  } else if (hora >= 18 && hora < 24) {
    document.body.style.background = "linear-gradient(155deg, #000428, #211132, #004E92)"

  // Se for madrugada (00h até 05h59), coloca esse
  } else {
    document.body.style.background = "linear-gradient(155deg, #0b7c51, #3f0d74, #183f60)"
  }
}

atualizarFundoAutomatico()

// Rodo a função a cada 1 minuto (60000ms) pra checar se a hora mudou 
setInterval(atualizarFundoAutomatico, 60000)
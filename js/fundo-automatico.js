function atualizarFundoAutomatico() {
  const date = new Date()
  
  // Pegando a hora atual
  const hora = date.getHours()

  // Manhã (06h às 11h59)
  if (hora >= 6 && hora < 12) {
    document.body.style.backgroundImage = "url('assets/imagem-manha.jpg')"
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"

  // Tarde (12h às 17h59)
  } else if (hora >= 12 && hora < 18) {
    document.body.style.backgroundImage = "linear-gradient(145deg, #FF8A65, #FFB74D, #64B5F6)"

  // Noite (18h às 23h59)
  } else if (hora >= 18 && hora < 24) {
    document.body.style.backgroundImage = "linear-gradient(155deg, #000428, #211132, #004E92)"

  // Madrugada (00h às 05h59)
  } else {
    document.body.style.backgroundImage = "linear-gradient(155deg, #0b7c51, #3f0d74, #183f60)"
  }
}

// Chama a função na hora que a página carrega
atualizarFundoAutomatico()

// Atualiza a cada 1 minuto
setInterval(atualizarFundoAutomatico, 60000)
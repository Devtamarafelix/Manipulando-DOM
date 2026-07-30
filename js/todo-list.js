// primeiro, pegamos os elementos
const form = document.getElementById("todo-form");
const input = document.getElementById("tarefa");
const lista = document.getElementById("todo-list");

// sempre que o formulário for enviado, chamaremos a função adicionarTarefa
form.addEventListener("submit", adicionarTarefa);

// o paramentro event sempre é montado pelo navegador. Ele é um objeto contendo informações do evento/ação do usuário
function adicionarTarefa(event) {
  // preventDefault - serve para impedir que um comportamento padrão de algum elemento ocorra
  // no caso do formulário, ele sempre tenta recarregar a página após o envio dos dados
  // com o preventDefault, isso não irá acontecer novamente
  event.preventDefault();

  // Pegando o texto digitado e removendo espaços em branco no começo e no final
  const textoTarefa = input.value.trim();

  // Não permite tarefas vazias
  if (textoTarefa === "") {
    alert("Digite uma tarefa");
    input.focus();
    return; // serve para parar a execução do código, não permite que execute o resto do bloco de código caso essa validação não seja cumprida
  }

  // criando um li
  const itemLista = document.createElement("li");
  itemLista.classList.add("todo-item");

  // criando um span para o texto
  const texto = document.createElement("span");
  texto.textContent = textoTarefa;

  // criando o botão de concluir
  const btnConcluir = document.createElement("button");
  btnConcluir.setAttribute("aria-label", "Concluir tarefa");
  btnConcluir.classList.add("concluir");

  // criando o ícone de concluir
  const iconConcluir = document.createElement("i");
  iconConcluir.classList.add("bi", "bi-check-lg");

  btnConcluir.append(iconConcluir);

  // criando o botão de remover
  const btnRemover = document.createElement("button");
  btnRemover.setAttribute("aria-label", "Remover tarefa");
  btnRemover.classList.add("remover");

  // criando o ícone de remover
  const iconRemover = document.createElement("i");
  iconRemover.classList.add("bi", "bi-trash3");

  btnRemover.append(iconRemover);

  // container para os botões
  const acoes = document.createElement("div");
  acoes.classList.add("acoes");

  // adicionando os botões na div
  acoes.append(btnConcluir);
  acoes.append(btnRemover);

  // monta o item da lista
  itemLista.append(texto);
  itemLista.append(acoes);

  // adicionando o item da lista montado dentro da lista
  lista.append(itemLista);

  // limpando o campo do input
  input.value = "";

  // voltando o foco para o input
  input.focus();

  // criando o evento dos botões
  // removendo tarefa
  btnRemover.addEventListener("click", function () {
    itemLista.remove();
  });

  //concluindo a tarefa
  btnConcluir.addEventListener("click", () => {
    texto.classList.toggle("tarefa-concluida");

    // se na lista de classes do elemento texto contém a classe.tarefa-concluida
    // então, ele executará o bloco de código, caso contrário, não.
    if (texto.classList.contains("tarefa-concluida")) {
      iconConcluir.classList.remove("bi-check-lg");
      iconConcluir.classList.add("bi-arrow-clockwise");

      btnConcluir.setAttribute("aria-label", "Desmarcar tarefa");
    } else {
      iconConcluir.classList.remove("bi-arrow-clockwise");
      iconConcluir.classList.add("bi-check-lg");

      btnConcluir.setAttribute("aria-label", "Concluir tarefa");
    }
  });
}
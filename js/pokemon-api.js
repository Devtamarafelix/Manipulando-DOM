const formPokemon = document.getElementById("pokemon-form");
const inputPokemon = document.getElementById("pokemon-input");
const pokemonCard = document.querySelector(".pokemon-card");

const div = document.createElement("div");

// adicionando um evento ao formulário
// quando alguém enviar(submit) esse formulário, execute a função buscarPokemon
formPokemon.addEventListener("submit", buscarPokemon);

async function buscarPokemon(event) {
  event.preventDefault();

  const pokemon = inputPokemon.value.trim().toLowerCase();
  // .value = pega o valor digitado no campo de input
  // .trim() = remove espaços em branco antes e depois da palavra
  // .toLowerCase() = serve para transformar o texto digitado em letras minúsculas

  if (pokemon === "") {
    alert("Digite o nome de um pokémon");
    inputPokemon.focus();
    return;
  }

  try {
    // await - aguardar
    // fetch - buscar/pegar algo no servidor
    // estamos dizendo para o navegador aguardar(await) a busca(fetch) de dados no servidor
    const resposta = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    );

    if (!resposta.ok) {
      console.error("Pokémon não encontrado");
      div.innerHTML =
        `<p class="text-[#ea0909] mt-4 text-xl text-center font-semibold">
            Pokémon não encontrado. Tente novamente!
         </p>`;
      pokemonCard.append(div);
      inputPokemon.focus();
      return;
    }

    // Lê o corpo da resposta e converte o JSON em um objeto JavaScript
    const dadosPokemon = await resposta.json();
    console.log(dadosPokemon);

    // pega os elementos do pokemon
    const tipos = dadosPokemon.types.map(item => item.type.name).join(' / ');

    div.innerHTML = `
      <section class="mt-4 border border-[#fcfcfc]/35 rounded-3xl bg-black/55 backdrop-blur-[10px] p-4">
        <img 
          src="${dadosPokemon.sprites.other["official-artwork"].front_default}" 
          alt="Foto do pokémon ${dadosPokemon.name}" 
          class="w-full h-[25rem] object-cover rounded-2xl border border-[#fcfcfc]/12"
        />

        <div>
          <h3 class="text 3-xl md:text-4xl font-extrabold mt-4 capitalize"> ${dadosPokemon.name} </h3>
          <p class="text-lg"> <strong>Altura:</strong> ${dadosPokemon.height / 10} m</p>
          <p class="text-lg"> <strong>Altura:</strong> ${dadosPokemon.weight / 10} kg</p>
          <p class="text-lg capitalize"> <strong>Tipo:</strong> ${tipos}</p>
        </div>
      </section>
    `;

    pokemonCard.append(div);
    inputPokemon.value = "";
    inputPokemon.focus();
  } catch (error) {
    console.error(error);
  }
}
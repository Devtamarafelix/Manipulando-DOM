const btnMenu = document.getElementById("btn-menu");
const navPrincipal = document.getElementById("navegacao-primaria");
const icone = btnMenu.querySelector("i");

// Classes Tailwind para quando o menu abrir no celular
const classesTailwindMenu = [
  "flex",
  "flex-col",
  "bg-black/95",    
  "backdrop-blur-md",   
  "border-2",
  "border-neutral-300",
  "rounded-2xl",
  "absolute",
  "top-16",
  "left-0",
  "w-full",
  "p-6",
  "z-50"
];

btnMenu.addEventListener("click", abrirMenu);

function abrirMenu() {
  const menuAberto = navPrincipal.classList.contains("z-50");

  if (menuAberto) {
    // Fecha o menu
    navPrincipal.classList.remove(...classesTailwindMenu);
    navPrincipal.classList.add("hidden");
    
    icone.classList.remove("bi-x");
    icone.classList.add("bi-list");
  } else {
    // Abre o menu
    navPrincipal.classList.remove("hidden");
    navPrincipal.classList.add(...classesTailwindMenu);
    
    icone.classList.remove("bi-list");
    icone.classList.add("bi-x");
  }

  btnMenu.setAttribute("aria-expanded", !menuAberto);
}
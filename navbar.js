export function navbarHamburguerOnClick() {
  const hamburguer = document.getElementById("cabecalho__hamburguer");

  if (hamburguer.value == "active") {
    hamburguer.value = "inactive";
    esconderNavbar();
  } else if (hamburguer.value == "inactive") {
    hamburguer.value = "active";
    mostrarNavbar();
  }
}

export function initNavbar() {
  esconderNavbar();
}

export function ocultarFundo() {
  const scrollTop = (
    document.documentElement ||
    document.body.parentNode ||
    document.body
  ).scrollTop;
  const navbar = document.getElementById("cabecalho-navbar");

  console.log(scrollTop);
  if (scrollTop > 0) {
    navbar.style.backgroundColor = "#081b29";
    navbar.style.backdropFilter = "blur(2px)";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
}

let mostrarNavbar = function mostrarNavbar() {
  const hamburguer = document.getElementById("cabecalho__hamburguer");
  hamburguer.classList.remove("fa-rotate-180");
  hamburguer.classList.add("fa-rotate-90");

  const itensNavbar = Array.from(
    document.getElementsByClassName("navbar__item")
  );

  mostrarItens(itensNavbar);

  setTimeout(() => {
    itensNavbar.forEach((item) => {
      item.style.visibility = "visible";
      item.style.left = "0%";
    });
  }, 10);
};

let esconderNavbar = function esconderNavbar() {
  const hamburguer = document.getElementById("cabecalho__hamburguer");
  hamburguer.classList.remove("fa-rotate-90");
  hamburguer.classList.add("fa-rotate-180");

  const itensNavbar = Array.from(
    document.getElementsByClassName("navbar__item")
  );
  itensNavbar.forEach((item, index) => {
    item.style.left = (itensNavbar.length - index - 1) * 100 + 100 + "%";
    item.style.visibility = "hidden";
  });

  setTimeout(esconderItens, 400, itensNavbar);
};

let mostrarItens = function mostrarItens(itensNavbar) {
  itensNavbar.forEach((item) => {
    item.style.display = "flex";
  });
};

let esconderItens = function esconderItens(itensNavbar) {
  itensNavbar.forEach((item) => {
    item.style.display = "none";
  });
};

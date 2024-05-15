import { navbarHamburguerOnClick, initNavbar, ocultarFundo } from "./navbar.js";
import cabecalhoPortfolioOnClick from "./portfolio_carrosel.js";
import enviarFormulario from "./formulario.js";

const navbarHamburguer = document.getElementById("cabecalho__hamburguer");
navbarHamburguer.addEventListener("click", navbarHamburguerOnClick);

const cabecalhoSites = document.getElementById("cabecalho__sites");
cabecalhoSites.addEventListener("click", function () {
  cabecalhoPortfolioOnClick(0);
});

const cabecalhoPalette = document.getElementById("cabecalho__palette");
cabecalhoPalette.addEventListener("click", function () {
  cabecalhoPortfolioOnClick(1);
});

const cabecalhoCamera = document.getElementById("cabecalho__camera");
cabecalhoCamera.addEventListener("click", function () {
  cabecalhoPortfolioOnClick(2);
});

const formulario = document.getElementById("secao-contato__formulario");
formulario.addEventListener("submit", (e) => enviarFormulario(e));

initNavbar();

window.onscroll = (e) => ocultarFundo();

document
  .getElementById("secao-educacao__botao-mais")
  .addEventListener("click", function () {
    window.open("./Curriculo.pdf", "_blank");
  });

document
  .getElementById("secao-experiencia__botao-mais")
  .addEventListener("click", function () {
    window.open("./Curriculo.pdf", "_blank");
  });

document
  .getElementById("secao-sobre__botao-curriculo")
  .addEventListener("click", function () {
    window.open("./Curriculo.pdf", "_blank");
  });

  document
  .getElementById("secao-portfolio__botao-mais")
  .addEventListener("click", function () {
    window.open("https://github.com/gabrielbller", "_blank");
  });

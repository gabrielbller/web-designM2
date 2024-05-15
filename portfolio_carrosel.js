export default function cabecalhoPortfolioOnClick(numPagina) {
  const totalPaginas = document.getElementById("numPaginas").value;
  const paginas = Array.from(
    document.getElementsByClassName("secao-portfolio__pagina")
  );

  paginas.forEach(
    (pagina) => (pagina.style.left = `${-(100 / totalPaginas) * numPagina}%`)
  );
}

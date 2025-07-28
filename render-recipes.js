document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-cards");
  const path = window.location.pathname;
  const nivelActual = path.split("/").length - 1;

  // Si estamos en una página de categoría (como pastas.html)
  if (contenedor) {
    const nombreArchivo = path.substring(path.lastIndexOf("/") + 1);
    const categoria = nombreArchivo.replace(".html", "");

    // Filtrar y ordenar alfabéticamente por título
    const recetasFiltradas = recetas
      .filter(receta => receta.categoria === categoria)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));

    recetasFiltradas.forEach(receta => {
      // Calculamos ruta relativa hacia assets
      const rutaBase = nivelActual === 2 ? "../.." : ".."; // 2 niveles en /recetas/pastas.html

      const card = document.createElement("div");
      card.classList.add("card-receta");

      card.innerHTML = `
        <a href="./${categoria}/${receta.id}.html" class="card-link">
          <img src="${rutaBase}/assets/${receta.id}.png" alt="${receta.titulo}">
          <div class="card-info">
            <h2>${receta.titulo}</h2>
            <p>${receta.descripcion}</p>
            <span class="tiempo">${receta.tiempo}</span>
          </div>
        </a>
      `;

      contenedor.appendChild(card);
    });
  }

  // Si estamos en una receta individual
  const tituloElem = document.getElementById("titulo-receta");
  const divTiempo = document.getElementById("tiempo-preparacion");
  const imgReceta = document.getElementById("imagen-receta");

  if (tituloElem && divTiempo && imgReceta) {
    const nombreArchivo = path.substring(path.lastIndexOf("/") + 1);
    const idReceta = nombreArchivo.replace(".html", "");

    const receta = recetas.find(r => r.id === idReceta);

    if (receta) {
      tituloElem.textContent = receta.titulo;
      divTiempo.textContent = receta.tiempo;

      const rutaBase = nivelActual === 3 ? "../../.." : "../.."; // 3 niveles en /recetas/pastas/pasta-carbonara.html
      imgReceta.src = `${rutaBase}/assets/${receta.id}.png`;
      imgReceta.alt = receta.titulo;
    }
  }
});

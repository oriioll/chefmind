document.addEventListener("DOMContentLoaded", () => {
  // Código para renderizar cards si estás en la página de categoría (ejemplo)
  const contenedor = document.getElementById("contenedor-cards");
  if (contenedor) {
    const url = window.location.pathname;
    const nombreArchivo = url.substring(url.lastIndexOf("/") + 1);
    const categoria = nombreArchivo.replace(".html", "");
    const recetasFiltradas = recetas.filter(receta => receta.categoria === categoria);

    recetasFiltradas.forEach(receta => {
      const card = document.createElement("div");
      card.classList.add("card-receta");

      card.innerHTML = `
        <a href="./${categoria}/${receta.id}.html" class="card-link">
          <img src="${receta.imagen}" alt="${receta.titulo}">
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

  // Código para insertar tiempo de preparación en la página de receta individual
  const tituloElem = document.getElementById("titulo-receta");
  const divTiempo = document.getElementById("tiempo-preparacion");

  if (tituloElem && divTiempo) {
    const titulo = tituloElem.textContent.trim().toLowerCase();
    const recetaEncontrada = recetas.find(r => r.titulo.toLowerCase() === titulo);

    if (recetaEncontrada) {
      divTiempo.textContent = `Tiempo de preparación: ${recetaEncontrada.tiempo}`;
    }
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const tituloElem = document.getElementById("titulo-receta");
  const divTiempo = document.getElementById("tiempo-preparacion");
  const imgReceta = document.getElementById("imagen-receta");

  if (tituloElem && divTiempo && imgReceta) {
    // Obtenemos el nombre del archivo para saber qué receta cargar
    const url = window.location.pathname;
    const nombreArchivo = url.substring(url.lastIndexOf("/") + 1);
    const idReceta = nombreArchivo.replace(".html", "");

    // Buscamos la receta por id (en tu array usas "id")
    const receta = recetas.find(r => r.id === idReceta);

    if (receta) {
      tituloElem.textContent = receta.titulo;
      divTiempo.textContent = `${receta.tiempo}`;
      imgReceta.src = receta.imagen;
      imgReceta.alt = receta.titulo;
    }
  }
});

let favoritosPelisStorage = localStorage.getItem("favoritosPelis");
let favoritosSerieStorage = localStorage.getItem("favoritosSerie");

let favoritosPelis = JSON.parse(favoritosPelisStorage);
let favoritosSerie = JSON.parse(favoritosSerieStorage);

console.log(favoritosPelis);
console.log(favoritosSerie);

let section = document.querySelector(".lista");

if ((favoritosPelis == null || !favoritosPelis || !favoritosPelis.length) && (favoritosSerie == null || !favoritosSerie || !favoritosSerie.length) ) {
  section.innerHTML = "<h2>No hay favoritos seleccionados</h2>";
} else {
  if (favoritosPelis != null || favoritosPelis) {
    favoritosPelis.forEach((id) => {
      console.log(id);
      buscarYMostrarFavoritosPeli(id);
    });
  }
  if (favoritosSerie != null || favoritosSerie) {
    favoritosSerie.forEach((id) => {
      console.log(id);
      buscarYMostrarFavoritosSerie(id);
    });
  }
  function buscarYMostrarFavoritosSerie(id) {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data) {
          console.log(data.title);
          document.querySelector(".tapas").innerHTML += `
          <li>  
            <a href="detallesSeries.html?id=${id}">
              <img src='https://image.tmdb.org/t/p/w342/${data.poster_path}'>
              <p>${data.name}</p>
            </a>
          </li>`;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function buscarYMostrarFavoritosPeli(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data) {
          document.querySelector(".tapas").innerHTML += `
        <li>  
          <a href="detallesPeliculas.html?id=${id}">
            <img src='https://image.tmdb.org/t/p/w342/${data.poster_path}'>
            <p>${data.title}</p>
          </a>
        </li>`;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
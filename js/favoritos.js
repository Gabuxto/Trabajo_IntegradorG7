console.log('favoritos');

let recuperoStorage = localStorage.getItem('paginaFavoritos')

let paginaFavoritos = JSON.parse (recuperoStorage);
console.log (paginaFavoritos);

let section =document.querySelector('.lista')
let personajesFavoritos = ''

if(Favoritos == null){
    section.innerHTML='<h1>No hay favoritos seleccionados</h1>'
} else {

for(let i=0; i<paginaFavoritos.length; i++){    
    buscarYMostrarFavoritos (paginaFavoritos[i])   
}

function buscarYMostrarFavoritos(id){
let url = 'https://api.themoviedb.org/3/movie/${paginaFavoritos[i]}'
fetch (url)
    .then ( function (response){
        return response.json();
    })
    .then ( function (data){
        console.log (data);
       paginaFavoritos += 
       `<article> <img src=${data.imagen}> 
          <p>Nombre: ${data.name} </p>
          <p>Status: ${data.overview}</p>
          <a href="detalle.html?id=${data.id}">Ver más</a>
      </article>`
    section.innerHTML = paginaFavoritos;
    })
    .catch ( function (error){
        console.log(error);
    })
   }
}

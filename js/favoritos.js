
let recuperoStorage = localStorage.getItem('seriesFavoritos')

let favoritos = JSON.parse (recuperoStorage);
console.log(favoritos);

let section = document.querySelector('.lista');
let paginaFavoritos = '';

if(favoritos == null || favoritos.length == 0){
    section.innerHTML='<h1>No hay favoritos seleccionados</h1>'
} else {
for(let i=0; i<favoritos.length; i++){    
    buscarYMostrarFavoritos (favoritos[i])   
}

function buscarYMostrarFavoritos(idSerie){
let url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US`;
fetch (url)
    .then ( function (response){
        return response.json();
    })
    .then ( function (data){
        console.log (data);
       paginaFavoritos += 
       `<article>  
       <a href="detallesSeries.html?id=${idSerie}"> <img src='https://image.tmdb.org/t/p/w342/${data.poster_path}'>
       <p>${data.name}</p>
       </a>
      </article>`
    section.innerHTML = paginaFavoritos;
    })
    .catch ( function (error){
        console.log(error);
    })
   }
}

let qs = location.search; 
let qsto = new URLSearchParams(qs); 
let idPeli = qsto.get('id'); 


let url = `https://api.themoviedb.org/3/movie/${idPeli}?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let titulo = document.querySelector('h1');
        let foto = document.querySelector('.foto');
        let calificacion = document.querySelector('.calificacionNumero');
        let estreno = document.querySelector('.fechaNumero');
        let duracion = document.querySelector('.duracionTexto');
        let sinopsis = document.querySelector('.sinopsisTexto') ;
        let genero = document.querySelector('.generoTexto');

        titulo.innerText = data.original_title;
        foto.innerHTML = `<img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="Portada">`;
        calificacion.innerText = data.vote_average;
        estreno.innerText = data.release_date;
        duracion.innerText = data.runtime;
        sinopsis.innerText = data.overview;

        let infoGeneros = data.genres; 
        let arrayGeneros = '';

        console.log(infoGeneros)

        for(let i=0; i<infoGeneros.length; i++){
             arrayGeneros += `<li>
                             <p><a href="detallesGenero.html?id=${infoGeneros[i].id}&title=${infoGeneros[i].name}">${infoGeneros[i].name}</a></p>
                             </li> ` 
         }
         
         genero.innerHTML = arrayGeneros;
         })
  
     .catch(function(error){
         console.log(error); 
     })

 let peliculasFavoritos = []
 
     let recuperoStorage = localStorage.getItem('peliculasFavoritos');
 
     if(recuperoStorage != null) {
        peliculasFavoritos = JSON.parse(recuperoStorage);
     }
 
     let  favoritos= document.querySelector('.paginaFavoritos');
     let   botonFavoritos=  document.querySelector('.botonFavoritos')
 
     if(peliculasFavoritos.includes(id)){
         botonFavoritos.innerText= "Quitar de favoritos";
     }
   
     paginaFavoritos.addEventListener ('click', function(evento){
         evento.preventDefault();
 
if(peliculasFavoritos.includes(id)){
    let indice =peliculasFavoritos.index0f(id);
   peliculasFavoritos.splice(indice, 1);
   botonFavoritos.innerText="Agregar a favoritos"
}
 
else {
    peliculasFavoritos.push(id);
    botonFavoritos.innerText= "Quitar de favoritos";
    }
console.log (localStorage);
 
     let   paginaFavoritosToString = JSON.stringify (peliculasFavoritos);
 
     localStorage.setItem  ('peliculasFavoritos',paginaFavoritosToString);
     })


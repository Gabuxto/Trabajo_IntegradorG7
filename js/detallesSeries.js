 let qs = location.search; 
let qsto = new URLSearchParams(qs); 
let idSerie = qsto.get('id'); 


let url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Valor de Data:");
        console.log(data);

      
        let titulo = document.querySelector('h1');
        let foto = document.querySelector('.foto');
        let calificacion = document.querySelector('.calificacionNumero');
        let estreno = document.querySelector('.fechaNumero');
        let sinopsis = document.querySelector('.sinopsis') ;
        let genero = document.querySelector('.generoTexto');

    
       titulo.innerText = data.name;
       foto.innerHTML = `<img src="https://image.tmdb.org/t/p/w342/${data.poster_path}" alt="Portada">`

       calificacion.innerText = data.vote_average;
       estreno.innerText = data.first_air_date;
       sinopsis.innerText = data.overview;
       
        let infoGeneros = data.genres; 
        let arrayGeneros = '';

        console.log(infoGeneros)

       for(let i=0; i<infoGeneros.length; i++){
            arrayGeneros += `<li>
                            <p><a href="detallesGenero.html?id=${infoGeneros[i].id}&title=${infoGeneros[i].name}">${infoGeneros[i].name}</a></p>
                            </li> ` 

        }
        console.log(arrayGeneros)

        genero.innerHTML = arrayGeneros; 
        
    })
    
    .catch(function(error){
        console.log(error); 
    })


let seriesFavoritos = [];
 
let recuperoStorage = localStorage.getItem('seriesFavoritos');

if(recuperoStorage != null){
    seriesFavoritos = JSON.parse(recuperoStorage);
}

let  botonFavoritos=  document.querySelector('.botonFavoritos')

if(seriesFavoritos.includes(idSerie)){
    botonFavoritos.innerText= "Quitar de favoritos";
}
  
botonFavoritos.addEventListener ('click', function(evento){
    evento.preventDefault();

    if(seriesFavoritos.includes(idSerie)){
   let indice = seriesFavoritos.indexOf(idSerie);
  seriesFavoritos.splice(indice, 1);
  botonFavoritos.innerText="Quitar de favoritos"
} else {
   seriesFavoritos.push(idSerie);
   botonFavoritos.innerText= "Agregar a favoritos";
   }
    console.log (localStorage);

    let   paginaFavoritosToString = JSON.stringify (seriesFavoritos);

    localStorage.setItem  ('seriesFavoritos',paginaFavoritosToString);
    })

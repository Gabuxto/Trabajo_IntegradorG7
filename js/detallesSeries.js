 
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

                // Me falta que al clickear un genero la pagina me lleve a ese 
                // Me falta lograr que se vea la foto 
        }
        console.log(arrayGeneros)

        genero.innerHTML = arrayGeneros; 
        })
 
    .catch(function(error){
        console.log(error); 
    })

    let seriesFavoritos = []
 
    let recuperoStorage = localStorage.getItem('seriesFavoritos');

    if(recuperoStorage != null) {
       seriesFavoritos = JSON.parse(recuperoStorage);
    }

    let  botonFavoritos=  document.querySelector('.botonFavoritos')

    if(seriesFavoritos.includes(id)){
        botonFavoritos.innerText= "Quitar de favoritos";
    }
  
     botonFavoritos.addEventListener ('click', function(evento){
        evento.preventDefault();

if(seriesFavoritos.includes(id)){
   let indice =seriesFavoritos.indexOf(id);
  seriesFavoritos.splice(indice, 1);
  botonFavoritos.innerText="Agregar a favoritos"
}

else {
   seriesFavoritos.push(id);
   botonFavoritos.innerText= "Quitar de favoritos";
   }
console.log (localStorage);

    let   paginaFavoritosToString = JSON.stringify (seriesFavoritos);

    localStorage.setItem  ('seriesFavoritos',paginaFavoritosToString);
    })


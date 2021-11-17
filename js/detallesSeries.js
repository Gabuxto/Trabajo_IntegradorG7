// Me traigo el id que viene por el Querystring y lo dejo en una variable. 
let qs = location.search; 
let qsto = new URLSearchParams(qs); 
let idSerie = qsto.get('id'); 

//llamar a la api para pedirle los datos de la peli con el idSerie y lo dejo en un objeto json

let url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log("Valor de Data:");
        console.log(data);

        //capturo el DOM 
        let titulo = document.querySelector('h1');
        let imagen = document.querySelector('.portada');
        let calificacion = document.querySelector('.calificacionNumero');
        let estreno = document.querySelector('.fechaNumero');
        let sinopsis = document.querySelector('.sinopsis') ;
        let genero = document.querySelector('.generoTexto');

        // actualizar datos y actualizar el DOM 
       titulo.innerText = data.name;
       imagen.src=data.backdrop; 
       calificacion.innerText = data.vote_average;
       estreno.innerText = data.first_air_date;
       sinopsis.innerText = data.overview;
       
        let infoGeneros = data.genres; 
        let arrayGeneros = '';

        console.log(infoGeneros)

       for(let i=0; i<infoGeneros.length; i++){
            arrayGeneros += `<li>
                            <p><a href="detallesGenero.html?id=${infoGeneros[i].id}">${infoGeneros[i].name}</a></p>
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








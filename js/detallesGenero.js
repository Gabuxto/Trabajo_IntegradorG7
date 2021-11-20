/* Desde la página de generos tengo q poder hacer click en uno y que me muestre todas las series 
y pelis de ese género
 */

let qs = location.search; 
let qsto = new URLSearchParams(qs); 
let idGenero = qsto.get('id'); 
let nameGenero = qsto.get('title')

let url = `https://api.themoviedb.org/3/discover/movie?api_key=706a603dcfa5007c6f8fb245e07c8383&with_genres=${idGenero}`;

console.log(url)

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);

        let info = data.results; 
        let peliculas = document.querySelector('.generoPeli');
        
        let pelisPorGenero = '';
        
        let tituloGenero = document.querySelector('h1')
        tituloGenero.innerText = `Peliculas: ${nameGenero}`

        for (let i=0; i<info.length; i++){
            pelisPorGenero += `                   
                                <li>
                                    <a href="detallesPeliculas.html?id=${info[i].id}"> 
                                    <img src='https://image.tmdb.org/t/p/w342/${info[i].poster_path}'>
                                    <p>${info[i].title}</p></a>
                                </li>`
        }
        
    
        peliculas.innerHTML = pelisPorGenero;
        


    })
    .catch(function(error){
        console.log(error); 
    })

    let url = `https://api.themoviedb.org/3/discover/tv?api_key=706a603dcfa5007c6f8fb245e07c8383&with_genres=${idGenero}`;

    console.log(url)
    
    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
    
            let info = data.results; 
            let series = document.querySelector('.generoSerie');
            
            let pelisPorGenero = '';
            
            let tituloGenero = document.querySelector('h1')
            tituloGenero.innerText = `Series: ${nameGenero}`
    
            for (let i=0; i<info.length; i++){
                pelisPorGenero += `                   
                                    <li>
                                        <a href="detallesPeliculas.html?id=${info[i].id}"> 
                                        <img src='https://image.tmdb.org/t/p/w342/${info[i].poster_path}'>
                                        <p>${info[i].title}</p></a>
                                    </li>`
            }
            
        
            peliculas.innerHTML = pelisPorGenero;
            
    
    
        })
        .catch(function(error){
            console.log(error); 
        })
    



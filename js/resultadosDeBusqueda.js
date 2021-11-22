/* La página deberá mostrar:
El término buscado. Ejemplo: “Resultados de búsqueda para: término ingresado en el input.”
La lista de resultados que coincidan con el término buscado.
Los resultados deberán ser hipervínculos a las páginas de detalle correspondientes.
Para el caso de no haber resultados que coincidan con el término buscado la página debe avisar al usuario que no hay coincidencias.
Si la búsqueda tarda en cargar deberá aparecer un spinner, gif animado o mensaje que dé al usuario referencia de que el proceso se está ejecutando. El elemento debe ocultarse una vez que el contenido de la página se haya cargado por completo.
 */

// Endpoints
// https://api.themoviedb.org/3/search/multi?api_key=706a603dcfa5007c6f8fb245e07c8383
// https://api.themoviedb.org/3/search/keyword?api_key=706a603dcfa5007c6f8fb245e07c8383


let qs = location.search; 
let qsto = new URLSearchParams(qs); 
let idResultado = qsto.get('results'); 

// Resultado multiple 

fetch(`https://api.themoviedb.org/3/search/movie?api_key=706a603dcfa5007c6f8fb245e07c8383&query=${idResultado}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data.results);
    let info = data.results;
    let resultado = document.querySelector('.resultados');
    let resultadosPelis = '';

    for (let i=0; i<info.length; i++){
        resultadosPelis += `<li> 
        
                             <a href="detallesPeliculas.html?id=${info[i].id}">
                             <img src='https://image.tmdb.org/t/p/w342/${info[i].poster_path}'>
                              <p>${info[i].original_title}</p></a>
                             </li>` }

resultado.innerHTML = resultadosPelis;
})
.catch(function(error){
    console.log(error); 
})

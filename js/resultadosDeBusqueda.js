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
let idResultado = qsto.get('id'); 

fetch(`https://api.themoviedb.org/3/search/multi?api_key=706a603dcfa5007c6f8fb245e07c8383&query=${idResultado}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);


})
.catch(function(error){
    console.log(error); 
})

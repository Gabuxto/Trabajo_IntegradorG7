/* Desde la página de generos tengo q poder hacer click en uno y que me muestre todas las series 
y pelis de ese género
 */
let qs = location.search; 
let qsto = new URLSearchParams(qs); 
let idPeli = qsto.get('id'); 


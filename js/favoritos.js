console.log('paginaFavoritos');

let recuperoStorage = localStorage.getItem('paginaFavoritos')

let paginaFavoritos = JSON.parse (recuperoStorage);
console.log (paginaFavoritos);

let section =document.querySelector('.lista')
let paginaFavoritos = ''
if(paginaFavoritos == null){
    section.innerHTML='<h1>No hay favoritos seleccionados</h1>'
} else {

for(let i=0; i<paginaFavoritos.length; i++){    
    buscarYMostrarFavoritos (paginaFavoritos[i])   
}

function buscarYMostrarFavoritos(id){
let url = `https://api.themoviedb.org/3/${id}?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US`;
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

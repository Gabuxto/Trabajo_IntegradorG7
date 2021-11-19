console.log('favoritos');

let recuperoStorage = localStorage.getItem('paginaFavoritos')

let paginaFavoritos = JSON.parse (recuperoStorage);
console.log (paginaFavoritos);

let section =document.querySelector('.lista')
   for(let i=0; i<paginaFavoritos.length; i++){    
    let url = 'https://api.themoviedb.org/3/tv/${paginaFavoritos[i]}'
    fetch (url)

    for(let i=0; i<paginaFavoritos.length; i++){    
        let url = 'https://api.themoviedb.org/3/movie/${paginaFavoritos[i]}'
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
    section.innerHTML = paginaFavoritos
    })
    .catch ( function (error){
        console.log(error);
    })
   }}

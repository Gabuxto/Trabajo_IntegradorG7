console.log('favoritos');

let recuperoStorage = localStorage.getItem('paginaFavoritos')

let paginaFavoritos = JSON.parse (recuperoStorage);
console.log (paginaFavoritos);

let section =document.querySelector('.lista')
   for(let i=0; i<paginaFavoritos.length; i++){    
    let url = 'https: .com /${paginaFavoritos[i]}'
    fetch (url)
    
    .then ( function (response){
        return response.json();
    })
    .then ( function (data){
        console.log (data);
       paginaFavoritos += 
       // <article> <img src=${data.image}> </img>
         //  <p>Nombre: ${data.name} </p>
          // <p>Status: ${data.status}</p>
            <a href="detalle.html?id=${data.id}">Ver más</a>
       // </article> 
       section.innerHTML = paginaFavoritos;
    })
    .catch ( function (error){
        console.log(error);
    })
    
    }
  


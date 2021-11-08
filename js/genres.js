
//peliculas
fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.genres);
        let info = data.genres; 
        let listapelis = document.querySelector('.listapelis');
        let pelis = ''; 
        for (let i=0; i<info.length; i++){
            pelis += `<li>
                                    <a href="detallesGenero.html?id=${info[i].id}">${info[i].name}</a>
                                </li>`
        }
        listapelis.innerHTML = pelis;
    })
    .catch(function(error){
        console.log(error);
    })
//series
    fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.genres);
        let info = data.genres; 
        let listaseries = document.querySelector('.listaseries');
        let gseries = ''; 
        for (let i=0; i<info.length; i++){
            gseries += `<li>
                                    <a href="detallesGenero.html?id=${info[i].id}">${info[i].name}</a>
                                </li>`
        }
        listaseries.innerHTML = gseries;
    })
    .catch(function(error){
        console.log(error);
    })
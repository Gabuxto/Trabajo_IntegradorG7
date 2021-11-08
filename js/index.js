
//mas populares
fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US&page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results);
        let info = data.results; 
        let tapas = document.querySelector('.tapas');
        let pelispopulares = ''; 

        for (let i=0; i<info.length; i++){
            pelispopulares += `<li>
                                    <img src='https://image.tmdb.org/t/p/w342/${info[i].poster_path}'>
                                    <p>${info[i].title}</p>
                                    <p>${info[i].release_date}</p>
                                    <a href="detallesPeliculas.html?id=${info[i].id}">ver más</a>
                                </li>`
        }
        tapas.innerHTML = pelispopulares;
    })
    .catch(function(error){
        console.log(error);
    })
//series mas vistas

fetch('https://api.themoviedb.org/3/tv/popular?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US&page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results);
        let info = data.results; 
        let tapas2 = document.querySelector('.tapas2');
        let pelispopulares = ''; 

        for (let i=0; i<info.length; i++){
            pelispopulares += `<li>
                                    <img src='https://image.tmdb.org/t/p/w342/${info[i].poster_path}'>
                                    <p>${info[i].name}</p>
                                    <p>${info[i].first_air_date}</p>
                                    <a href="detallesSeries.html?id=${info[i].id}">ver más</a>
                                </li>`
        }
        tapas2.innerHTML = pelispopulares;
    })
    .catch(function(error){
        console.log(error);
    })


//mas valoradas

    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=7c98c63c7f5b48716db97eeade9c8a32&language=en-US&page=1')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data.results);
        let info = data.results; 
        let tapas3 = document.querySelector('.tapas3');
        let pelispopulares = ''; 

        for (let i=0; i<info.length; i++){
            pelispopulares += `<li>
                                    <img src='https://image.tmdb.org/t/p/w342/${info[i].poster_path}'>
                                    <p>${info[i].title}</p>
                                    <p>${info[i].release_date}</p>
                                    <a href="detallesPeliculas.html?id=${info[i].id}">ver más</a>
                                </li>`
        }
        tapas3.innerHTML = pelispopulares;
    })
    .catch(function(error){
        console.log(error);
    })

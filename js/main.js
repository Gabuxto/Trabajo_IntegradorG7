//Barra de busqueda 
console.log('validando');

let formulario = document.querySelector('form');
let inputField =  document.querySelector('.search');
let message =  document.querySelector('.message');
let button = document.querySelector('.searchButton')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()


    if(inputField.value == "") {
        button.addEventListener('click', function(e){
        e.preventDefault})
        /* message.innerText = "El campo es obligatorio" */
    } else {
        this.submit()
    } 
})

inputField.addEventListener('focus' , function(){
    message.innerText = ''; 
})
var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click',()=>{
    fetch('http://api.openweathermap.org/geo/1.0/direct?q='+inputValue.value+'&appid=6d615fbdb0fa1842449678692e31cdd1')
    .then(response => response.json())
    .then(data => console.log(data))

    
  
    .catch(err => alert("Wrong city name."))
    
})








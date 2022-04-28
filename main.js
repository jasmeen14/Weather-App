var button = document.querySelector('button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0289a213b72fa409ce8ebc9f485c9b86')
  .then(response=>response.json())
  .then(data => console.log(data))

  .catch(err => alert("Wrong city name."))

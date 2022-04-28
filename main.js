var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var country = document.querySelector('.country');

button.addEventListener('click',()=>{
    //console.log('http://api.openweathermap.org/geo/1.0/direct?q='+inputValue.value+'&appid=6d615fbdb0fa1842449678692e31cdd1')
    fetch('http://api.openweathermap.org/geo/1.0/direct?q='+inputValue.value+'&appid=6d615fbdb0fa1842449678692e31cdd1')
    .then(response => response.json())
    //.then(data => console.log(data))
     .then(data =>{
        latValue = data['0']['lat'];
        console.log('latValue:'+latValue)
        lonValue = data['0']['lon'];
        console.log('lonValue:'+lonValue)

        console.log('https://api.openweathermap.org/data/2.5/weather?lat='+latValue+'&lon='+lonValue+'&appid=6d615fbdb0fa1842449678692e31cdd1' )
        fetch('https://api.openweathermap.org/data/2.5/weather?lat='+latValue+'&lon='+lonValue+'&appid=6d615fbdb0fa1842449678692e31cdd1')
       .then(response => response.json())
       //.then(data => console.log(data))
       .then(data =>{
           //console.log("ABC")
           var nameValue = data['name'];
           //console.log('nameValue:'+nameValue)
           var tempValue = data['main']['temp'];
           //console.log('Temp:'+tempValue)
           temp.innerHTML = tempValue;
           var descValue = data['weather'][0]['description'];
           desc.innerHTML = descValue;
           var countryName = data['sys']['country'];
           country.innerHTML = countryName;
        })
         
     })
    


    .catch(err => alert("Wrong city name."))
    
})








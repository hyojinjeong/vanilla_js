const icon = document.querySelector("#weather div:nth-child(2)");
const weather = document.querySelector("#weather div:last-child");
const API_KEY = "3946e1ef5977884133653eea1bc27b98";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let iconCode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";  
        icon.innerHTML = `<img src=${iconUrl} style="background-color:white;">`  
        weather.innerText = `${data.name}
         ${data.weather[0].description}, ${data.main.temp}°C `;
      });    
}

function onGeoError(){
    alert("Can't find");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

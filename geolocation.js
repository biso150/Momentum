/*
** geolocation
*/
const locate = document.querySelector(".geolocation .locate");
const temperature = document.querySelector(".geolocation .temperature");
const gepImg = document.querySelector(".geolocation .geoImg");

function geoOk (position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const API_KEY = "ecc4b76dad6c842649ae3ffff2ddf1b4";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
  
  fetch(url).then(response => response.json()).then(data => {
    const getLocate = data.name;
    const getWeather = data.weather[0].main;
    const getTemperature = data.main.temp;
    const getIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    
    locate.innerText = getLocate;
    gepImg.src = getIcon;
    temperature.innerText = `the temperature is ${getTemperature}º`;
  });
}

function geoError () {
  alert("I can't find your location.")
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);







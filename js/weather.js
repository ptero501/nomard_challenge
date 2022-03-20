const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "24591a3cc5eb6701442e45b18de6d8eb";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = `city : ${data.name}`;
        weather.innerText = `weather : ${data.weather[0].main}`;
    });
}
navigator.geolocation.getCurrentPosition(onGeoOk);
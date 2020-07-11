require('./bootstrap.min.css');
require('./index.css');
const {
    Weather
} = require('./Weather.js');
const {
    UI
} = require('./UI');
const ui = new UI();

async function fetchWeather(city, countryCode) {
    const weather = new Weather(city, countryCode);
    const data = await weather.getWeather();
    const data2 = await data.json();
    console.log(data2);
    if (data2.cod) {
        // alert(data2.message);
        ui.render(data2, true);

    } else {
        ui.render(data2, false);
    }
}

document.getElementById('w-change').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(document.getElementById('city').value, document.getElementById('countryCode').value);
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    fetchWeather(city, countryCode);
});

// document.addEventListener('DOMContentLoaded', fetchWeather());
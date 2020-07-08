require('./index.css');
const {
    Weather
} = require('./Weather.js');
const weather = new Weather('London', 'uk');
const {
    UI
} = require('./UI');
const ui = new UI();

async function fetchWeather() {
    const data = await weather.getWeather();
    const data2 = await data.json();
    ui.render(data2);
}


document.addEventListener('DOMContentLoaded', fetchWeather());
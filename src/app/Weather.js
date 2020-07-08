export class Weather {
    constructor(city, countryCode) {
        this.apiKey = '10211c87728bbd1e3cb0ae58b34b18b1';
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
        const data = await fetch(URI);
        return data;
    }
}
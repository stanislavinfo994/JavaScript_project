function getWeather() {
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value;
    if (!city) {
        alert('Введіть, будь ласка, назву міста!');
        return;
    }
    const apiKey = '5d066958a60d315387d9492393935c19';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = {
                temperature: data.main.temp,
                pressure: data.main.pressure,
                description: data.weather[0].description,
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                windDirection: data.wind.deg,
                icon: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
            };
            document.getElementById('temperature').innerText = `${weather.temperature} °C`;
            document.getElementById('pressure').innerText = `${weather.pressure} гПа`;
            document.getElementById('description').innerText = weather.description;
            document.getElementById('humidity').innerText = `${weather.humidity} %`;
            document.getElementById('wind-speed').innerText = `${weather.windSpeed} м/с`;
            document.getElementById('wind-direction').innerText = `${weather.windDirection} °`;
            document.getElementById('icon').src = weather.icon;
        })
        .catch(error => {
            console.log(error);
            alert('Сталася помилка при отриманні даних про погоду!');
        });
}

const button = document.getElementById('btn-get-weather');
button.addEventListener('click', getWeather);

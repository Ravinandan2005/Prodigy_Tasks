const apiKey = '980bbb0d277b83a5efdeeae1c7481b93'; 
async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        document.getElementById('error').innerText = "Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetchWeatherData(url);
}

async function getWeatherByLocation() {
    if (!navigator.geolocation) {
        document.getElementById('error').innerText = "Geolocation is not supported by your browser.";
        return;
    }
    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
        fetchWeatherData(url);
    }, () => {
        document.getElementById('error').innerText = "Unable to retrieve your location.";
    });
}

async function fetchWeatherData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();

        const weatherElement = document.getElementById('weather');
        document.getElementById('error').innerText = ""; // Clear errors

        weatherElement.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById('error').innerText = error.message;
    }
}

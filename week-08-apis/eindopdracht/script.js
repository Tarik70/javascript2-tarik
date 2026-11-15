
const showWeather = (data) => {

    console.log(data);

    const weatherInfo = document.querySelector('#weather-info');

    const city = data.name;
    const icon = data.weather[0].icon;
    const description = data.weather[0].description;
    const temperature = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    weatherInfo.innerHTML = `
        <article>
            <h2>${city}</h2>

            <img 
                src="https://openweathermap.org/img/wn/${icon}@2x.png"
                alt="${description}"
            >

            <p>
                <span>Weer</span>
                <span>${description}</span>
            </p>

            <p>
                <span>Temperatuur</span>
                <span>${temperature} °C</span>
            </p>

            <p>
                <span>Gevoelstemperatuur</span>
                <span>${feelsLike} °C</span>
            </p>

            <p>
                <span>Luchtvochtigheid</span>
                <span>${humidity}%</span>
            </p>

            <p>
                <span>Windsnelheid</span>
                <span>${windSpeed} m/s</span>
            </p>
        </article>
    `;
};


const getWeather = (city) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=nl`;

    
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Stad niet gevonden of API-fout!');
            }

            return response.json();
        })
        .then(data => {
            console.log(data);

            
            showWeather(data);
        })
        .catch(error => {
            console.error('Fout:', error);

            document.querySelector('#weather-info').innerHTML = `
                <p>Er is iets misgegaan. Controleer de stadsnaam en probeer opnieuw.</p>
            `;
        });
};

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const cityInput = document.querySelector('#city-input');
    const city = cityInput.value.trim();

    if (city) {
        getWeather(city);
    }

    cityInput.value = '';
});

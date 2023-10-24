document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    getWeatherData(city);
  });
  
  document.getElementById('city').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      const city = document.getElementById('city').value;
      getWeatherData(city);
    }
  });
  
  function getWeatherData(city) {
    // Reemplaza 'YOUR_API_KEY' con tu clave de OpenWeatherMap
    const apiKey = 'a62811355d1268be29e2ec75a6fc4486';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">`;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} km/h`;
        document.getElementById('weatherInfo').style.display = 'block';
      })
      .catch(error => {
        console.error(error);
        alert('City not found.');
      });
  }
  
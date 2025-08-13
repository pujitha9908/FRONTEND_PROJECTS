<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Simple Weather App</title>
</head>
<body>
  <h2>🌦 Weather App</h2>
  <input type="text" id="search" placeholder="Enter city name" />
  <div id="loading" style="display: none;">Loading...</div>
  <div id="error" style="color: red;"></div>
  <div id="result"></div>

  <script>
    const API_KEY = 'c7183347d901b59a41295441f6420d4d'; // Replace if invalid

    const searchInput = document.getElementById('search');
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');

    searchInput.addEventListener('input', () => {
      const city = searchInput.value.trim();
      if (city === '') return;

      loadingDiv.style.display = 'block';
      errorDiv.textContent = '';
      resultDiv.innerHTML = '';

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        .then(res => {
          if (!res.ok) throw new Error('City not found or API error');
          return res.json();
        })
        .then(data => {
          const { name, main, weather } = data;
          resultDiv.innerHTML = `
            <h3>${name}</h3>
            <p>🌡 Temperature: ${main.temp}°C</p>
            <p>☁ Condition: ${weather[0].description}</p>
          `;
        })
        .catch(err => {
          errorDiv.textContent = err.message;
        })
        .finally(() => {
          loadingDiv.style.display = 'none';
        });
    });
  </script>
</body>
</html>

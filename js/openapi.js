fetch("https://api.open-meteo.com/v1/forecast?latitude=35.7796&longitude=-78.6382&current=temperature_2m")
    .then(response => response.json())
    .then(data => {
        document.getElementById("temperature").innerText =
            `Temperature: ${data.current.temperature_2m}°C`;
    })
    .catch(error => {
        console.error("Error:", error);
    });

fetch("https://api.open-meteo.com/v1/forecast?latitude=35.7796&longitude=-78.6382&current=wind_speed_10m")
    .then(response => response.json())
    .then(data => {
        document.getElementById("wind").innerText =
            `Wind Speed: ${data.current.wind_speed_10m} km/h`;
    })
    .catch(error => {
        console.error("Error:", error);
    });
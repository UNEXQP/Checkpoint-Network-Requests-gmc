async function fetchWeather() {
    const apiKey = '805df1038a3095b70a9132a661ab8466'; // Replace with your actual API key
    const city = 'London'; // Replace with your city or make it dynamic based on user input
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        // Extract and display relevant data
        document.getElementById('location').innerText = `Location: ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again.");
    }
}

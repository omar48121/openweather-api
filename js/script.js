const fetchData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${document.querySelector("select").value}&appid=12345&units=metric`)
    .then(response => response.json())
    .then(data => {
        document.querySelector(".city-name").innerHTML = "Nombre del país o ciudad: ";
        document.querySelector(".min-temp").innerHTML = "Temperatura mínima: ";
        document.querySelector(".temp").innerHTML = "Temperatura: ";
        document.querySelector(".max-temp").innerHTML = "Temperatura máxima: ";
        document.querySelector(".long").innerHTML = "Longitud: ";
        document.querySelector(".coords").innerHTML = "Coordenadas: ";
        document.querySelector(".lat").innerHTML = "Latitud: ";
        document.querySelector(".hum").innerHTML = "Humedad: ";
        document.querySelector(".other").innerHTML = "Sensación térmica: ";
        document.querySelector(".press").innerHTML = "Presión: ";
        document.querySelector(".city-name").innerHTML += data.name;
        document.querySelector(".min-temp").innerHTML += data.main.temp_min + " °C";
        document.querySelector(".max-temp").innerHTML += data.main.temp_max + " °C";
        document.querySelector(".temp").innerHTML += data.main.temp + " °C";
        document.querySelector(".long").innerHTML += data.coord.lon;
        document.querySelector(".coords").innerHTML += `${data.coord.lon}, ${data.coord.lat}` ;
        document.querySelector(".lat").innerHTML += data.coord.lat;
        document.querySelector(".hum").innerHTML += data.main.humidity;
        document.querySelector(".other").innerHTML += data.main.feels_like + " °C";
        document.querySelector(".press").innerHTML += data.main.pressure;
    });
}
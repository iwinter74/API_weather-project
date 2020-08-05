let output = document.getElementById("table")
let myLocation = document.getElementById("location")
let temperature = document.getElementById("temperature")
let description = document.getElementById("description")
let time = document.getElementById("time")
let currentTime
let kelvin
let celcius

const myWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&appid=38d37c536d598da238ac3698e6cbde7f`)

        .then(response => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.weather)
            myLocation.innerHTML = `Weather in ${data.name}, ${data.sys.country}`
            kelvin = data.main.temp
            celcius = kelvin - 273.15
            celcius= celcius.toFixed()
            temperature.innerHTML = `${celcius} °C`
            description.innerHTML = data.weather[0].description
            currentTime = new Date()
            time.innerHTML = `Obtained at ${currentTime}`
            output.innerHTML = `<tr>
            <td>Local Time</td>
            <td>${currentTime}</td>
            </tr>
            <tr>
            <td>Wind</td>
            <td>${data.wind.speed} m/s</td>
            </tr>
            <tr>
            <td>Cloudiness</td>
            <td>${data.weather[0].main}</td>
            </tr>
            <tr>
            <td>Pressure</td>
            <td>${data.main.pressure} hPa</td>
            </tr>
            <tr>
            <td>Humidity</td>
            <td>${data.main.humidity} %</td>
            </tr>
            <tr>
            <td>Sunrise</td>
            <td>${data.sys.sunrise}, unix UTC</td>
            </tr> <tr>
            <td>Sunset</td>
            <td>${data.sys.sunset}, unix UTC</td>
            </tr>
            <tr>
            <td>Geo coords</td>
            <td>[${data.coord.lon}, ${data.coord.lat}]</td>
            </tr>`
        }
        )
    
}

myWeather()


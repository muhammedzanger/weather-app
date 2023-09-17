/** @format */

const API_KEY = "0f1c2da4708e97826d2ede899e6ff860"
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=`
// console.log(API_URL)
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherImg = document.querySelector(".weather-icon")

async function showWeather(city) {
  let response = await fetch(API_URL + city + `&appid=${API_KEY}`)
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
  } else {
    var data = await response.json()
    // console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML =
      Math.round(Math.min(data.main.temp)) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"

    if (data.weather[0].main == "Clouds") {
      weatherImg.src = "images/clouds.png"
    } else if (data.weather[0].main == "Clear") {
      weatherImg.src = "images/clear.png"
    } else if (data.weather[0].main == "Drizzle") {
      weatherImg.src = "images/drizzle.png"
    } else if (data.weather[0].main == "Humidity") {
      weatherImg.src = "images/humidity.png"
    } else if (data.weather[0].main == "Mist") {
      weatherImg.src = "images/mist.png"
    } else if (data.weather[0].main == "Rain") {
      weatherImg.src = "images/rain.png"
    } else if (data.weather[0].main == "Snow") {
      weatherImg.src = "images/snow.png"
    } else if (data.weather[0].main == "Wind") {
      weatherImg.src = "images/wind.png"
    }
    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
  }
}
searchBtn.addEventListener("click", () => {
  showWeather(searchBox.value)
})

// italy&appid=${API_KEY}

const apiKey = "91ae71033d2be667e30a3dd1ee80b096";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;// this will update the city name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) +'°C' ;
    document.querySelector(".humid").innerHTML = data.main.humidity+ '%';
    document.querySelector(".wind"). innerHTML = Math.round(data.wind.speed) +' KPH';
    document.querySelector(".wDirection").innerHTML=data.wind.deg+ " Deg";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src ="icon/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src ="icon/Clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src ="icon/Rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src ="icon/Drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src ="icon/Mist.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src ="icon/Snow.png"
    }
}
searchBtn.addEventListener('click', () =>{
    checkWeather(searchBox.value);
})


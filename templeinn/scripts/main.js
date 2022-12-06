const date_now = new Date();

const full_date = new Intl.DateTimeFormat ('en-US', {dateStyle: 'full'}).format(date_now);

document.querySelector('.date').textContent = full_date;

console.log(full_date);

//click event
function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

let date = new Date();
let year = date.getFullYear();
document.querySelector(".year").textContent = year;

let oLastModified = document.lastModified;
document.querySelector('.updated').textContent = oLastModified;

if (date.getDay() == 1 || date.getDay() == 2) {
    document.querySelector('#banner').style.display = 'block';
}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5391811&appid=9fa85cce9ff44eb89eb0511a9301b64f";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    // °F = (K - 273.15)* 1.8000 + 32.00
    document.querySelector('#current-temp').textContent = ((jsObject.main.temp-273.15)*1.8+32).toFixed(2);
    document.querySelector('#ws').textContent = (jsObject.wind.speed).toFixed(2);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    //document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    let temp = document.querySelector('#current-temp').textContent;
    let windspeed = document.querySelector('#ws').textContent;
    let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
    if (temp < 50 & windspeed > 3) {
        document.querySelector('#wc').innerHTML = chill.toFixed(2)+" &deg;F";
} 
    else {
        chill='N/A';
    }

  };
getWeather();
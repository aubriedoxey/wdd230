const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5861897&appid=9fa85cce9ff44eb89eb0511a9301b64f";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();
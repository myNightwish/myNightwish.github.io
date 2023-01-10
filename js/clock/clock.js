// key: 6a436d7ac1013a783445c0641e295d54
var keyMap = '6a436d7ac1013a783445c0641e295d54';
// 1. 根据ip地址获取城市名
const ipAddress = returnCitySN["cip"];
let adcode = '110000';
let infoCity = '北京市';
let temperature = '25';
let humidity = '50';
let weather = '晴';

fetch('//restapi.amap.com/v3/ip?key='+keyMap+'&ip='+ipAddress)
.then(res => res.json())
.then(data => {
  console.log('data---1:', data)
  adcode = data.adcode;
  getWeather();
})


const getWeather = () => fetch('//restapi.amap.com/v3/weather/weatherInfo?key='+keyMap+'&city='+adcode+'&output=JSON&extensions=base')
.then(res => res.json())
.then(data => {
  console.log("data---:", data)
  temperature = data.lives[0]?.temperature;
  humidity = data.lives[0].humidity;
  infoCity = data.lives[0].city;
  weather = data.lives[0].weather;

  const clock_dispay = document.getElementById('hexo_electric_clock');

  const dispay_HTML =  
`<div class="clock-row">
    <span class="card-clock-weather">${weather}</span>
    <span class="card-clock-temperature">${temperature}°C</span>
    <span class="card-clock-humidity">💧${humidity}%</span>
  </div>
  
  <div class="clock-row">
    <span class="card-clock-city">${infoCity}</span>
  </div>
  <div class="clock-row">
    <span class="card-clock-ip">Ip: ${ipAddress}</span>
  </div>
  `;
  clock_dispay.innerHTML = dispay_HTML;
})







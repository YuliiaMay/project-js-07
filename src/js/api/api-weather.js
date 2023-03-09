import axios from 'axios';
import { format } from 'date-fns';
const weatherSection = document.querySelector('.news__container--weather');

let CURRENT_CITY = null;

const API_KEY = 'f04badc85916bf5da865e7f8ff557661';
let url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${API_KEY}&lang=uk&units=metric`;

getWeather();

function getWeather() {
  navigator.geolocation.getCurrentPosition(success, error);
}

async function success(pos) {
  const crd = pos.coords;
  let data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&units=metric&lang=uk&appid=${API_KEY}`
  );

  getWeatherData(data);
}
async function error() {
  let data = await axios.get(url);
  getWeatherData(data);
}

function getWeatherData(data) {
  let dataResults = data.data.results;
  console.log(dataResults);
  CURRENT_CITY = data.data.name;

  const weatherStatus = data.data.weather[0].main;

  const location = data.data.name;

  const temperature = ~~data.data.main.temp;

  const weatherIcon = data.data.weather[0].icon;

  const today = Date.now();

  const date = format(Date.now(), 'dd MMM yyyy');
  const day = format(Date.now(), 'iii');

  const locationIcon = '../icons.adfc4680.svg#location';

  const weatherSect = `
<div class="weather__block">
<div class="weather__header">
<span class="weather__temperature">${temperature}° </span>
<div class="weather__section">
  <span class="weather__status">${weatherStatus}</span>
  <div class="weather__location">
  <svg class="geo_svg">
                    <use class="loco_logo" href="${locationIcon}"></use>
                </svg>
    <p class="weather__city">${location}</p>
  </div>
</div>
</div>
<img class="weather__logo" src="https://openweathermap.org/img/wn/${weatherIcon}@4x.png" alt="${weatherStatus}" />
<p class="weather__day">
<div class="weather__date">
<p class="weather__day">
${day}</br>${date}
</p>
</div>
<button class="weather__btn">weather for week</button>
</div>

  `;
  weatherSection.innerHTML = weatherSect;
  document
    .querySelector('.weather__btn')
    .addEventListener('click', handleClickForWeek);
}

async function handleClickForWeek() {
  let weekResult = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${CURRENT_CITY}&units=metric&cnt=40&appid=f04badc85916bf5da865e7f8ff557661`
  );
  renderWeek(weekResult);
}

function renderWeek(weekResult) {
  let dataWeek = weekResult.data.list;
  console.log(dataWeek);

  for (let i = 0; i < dataWeek.length; i += 8) {
    let dateOfWeek = dataWeek[i].dt_txt;
    const weekWeatherIcon = dataWeek[i].weather[0].icon;
    const tempOfWeek = ~~dataWeek[i].main.temp;
    const windForWeek = ~~dataWeek[i].wind.speed;
    const weatherDescriptionForAlt = dataWeek[i].weather[0].main;

    const dayWeather = `<div class="day__weather"><h3 class="weather--day__title">${dateOfWeek}</h3>
        <div class="week__weather--more">
        <img class="weather__icon" src="http://openweathermap.org/img/wn/${weekWeatherIcon}@2x.png" alt="${weatherDescriptionForAlt}" width=40/>
  <p class="deg">Temp:<br>${tempOfWeek} °C</p>
  <p class="speed">Wind: <br>${windForWeek} m/s</p>
  </div>
  </div>
  `;

    const removeWeatherBlock = document.querySelectorAll('.weather__block');
    removeWeatherBlock.forEach(e => e.remove());
    weatherSection.insertAdjacentHTML('beforeend', dayWeather);
  }

  const btnForOneDay = `<button class="one__day">One day</button>`;
  weatherSection.insertAdjacentHTML('beforeend', btnForOneDay);
  document.querySelector('.one__day').addEventListener('click', getWeather);
}

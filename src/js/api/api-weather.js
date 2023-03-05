import axios from 'axios';
import { format } from 'date-fns';
const weatherSection = document.querySelector('.news__container--weather');
// const fetchBtn = document.querySelector('.weather__btn');

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
  // console.log(day);
  // console.log(date);

  const weatherSect = `
<div class="weather__header">
  <span class="weather__temperature">${temperature}° </span>
  <div class="weather__block">
    <span class="weather__status">${weatherStatus}</span>
    <div class="weather__location">
    <svg class="geo_svg" width="18" height="18" viewBox="0 0 37 32" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.50001 0.6875C7.03936 0.690403 4.68032 1.66918 2.94038 3.40912C1.20044 5.14906 0.221663 7.5081 0.21876 9.96875C0.215813 11.9796 0.87265 13.9359 2.08851 15.5375C2.08851 15.5375 2.34163 15.8708 2.38298 15.9189L9.50001 24.3125L16.6204 15.9147C16.6575 15.8699 16.9115 15.5375 16.9115 15.5375L16.9124 15.535C18.1276 13.934 18.7841 11.9787 18.7813 9.96875C18.7784 7.5081 17.7996 5.14906 16.0596 3.40912C14.3197 1.66918 11.9607 0.690403 9.50001 0.6875ZM9.50001 13.3438C8.8325 13.3438 8.17998 13.1458 7.62496 12.775C7.06994 12.4041 6.63736 11.877 6.38192 11.2603C6.12647 10.6436 6.05963 9.96501 6.18986 9.31032C6.32008 8.65563 6.64152 8.05427 7.11352 7.58226C7.58553 7.11026 8.18689 6.78882 8.84158 6.6586C9.49627 6.52837 10.1749 6.59521 10.7916 6.85066C11.4083 7.1061 11.9354 7.53868 12.3062 8.0937C12.6771 8.64872 12.875 9.30124 12.875 9.96875C12.8739 10.8635 12.518 11.7213 11.8853 12.354C11.2526 12.9867 10.3948 13.3426 9.50001 13.3438Z" />
    </>>
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
  `;
  weatherSection.innerHTML = weatherSect;
  document
    .querySelector('.weather__btn')
    .addEventListener('click', handleClickForWeek);
}

async function handleClickForWeek() {
  let weekResult = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${CURRENT_CITY}&units=metric&cnt=7&appid=f04badc85916bf5da865e7f8ff557661`
  );
  renderWeek(weekResult);
}

function renderWeek(weekResult) {
  let dataWeek = weekResult.data.list;
  const dayWeather = dataWeek
    .map(({ weather, main, wind, dt_txt }) => {
      return `<div class="day__weather"><h3 class="weather--day__title">${dt_txt.substr(
        0,
        16
      )}</h3>      
      <div class="week__weather--more">
      <img class="weather__icon" src="http://openweathermap.org/img/wn/${
        weather[0].icon
      }@2x.png" alt="${weather[0].main}" width=40/>
<p class="deg">Temp: ${Math.round(Math.round(main.feels_like))} °C</p>
<p class="speed">Wind: ${wind.speed} m/s</p>
</div>
</div>
`;
    })
    .join('');
  weatherSection.innerHTML = dayWeather;
  const btnGoSinoptik = `<button class="one__day">One day</button>`;
  weatherSection.insertAdjacentHTML('beforeend', btnGoSinoptik);
  document.querySelector('.one__day').addEventListener('click', getWeather);
}

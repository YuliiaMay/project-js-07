import axios from 'axios';
const weatherSection = document.querySelector('.news__container--weather');

const API_KEY = 'f04badc85916bf5da865e7f8ff557661';
const url = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${API_KEY}&lang=ua&units=metric`;

fetchResult();

async function fetchResult() {
  let data = await axios.get(url);
  getWeatherData(data);
}

function getWeatherData(data) {
  let dataResults = data.data.results;
  console.log(dataResults);

  const weatherStatus = data.data.weather[0].main;
  console.log(weatherStatus);
  const location = data.data.name;
  console.log(location);
  const temperature = ~~data.data.main.temp;
  console.log(temperature);
  const weatherIcon = data.data.weather[0].icon;
  console.log(weatherIcon);
  const today = new Date();
  console.log(today.getDay());

  const weatherSect = `
<div class="weather__head">
  <span class="weather__temp">${temperature}° </span>
  <div class="weather__container">
    <span class="weather__status">${weatherStatus}</span>
    <div class="weather__location">
    <svg width="27" height="27" viewBox="0 0 37 32" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.50001 0.6875C7.03936 0.690403 4.68032 1.66918 2.94038 3.40912C1.20044 5.14906 0.221663 7.5081 0.21876 9.96875C0.215813 11.9796 0.87265 13.9359 2.08851 15.5375C2.08851 15.5375 2.34163 15.8708 2.38298 15.9189L9.50001 24.3125L16.6204 15.9147C16.6575 15.8699 16.9115 15.5375 16.9115 15.5375L16.9124 15.535C18.1276 13.934 18.7841 11.9787 18.7813 9.96875C18.7784 7.5081 17.7996 5.14906 16.0596 3.40912C14.3197 1.66918 11.9607 0.690403 9.50001 0.6875ZM9.50001 13.3438C8.8325 13.3438 8.17998 13.1458 7.62496 12.775C7.06994 12.4041 6.63736 11.877 6.38192 11.2603C6.12647 10.6436 6.05963 9.96501 6.18986 9.31032C6.32008 8.65563 6.64152 8.05427 7.11352 7.58226C7.58553 7.11026 8.18689 6.78882 8.84158 6.6586C9.49627 6.52837 10.1749 6.59521 10.7916 6.85066C11.4083 7.1061 11.9354 7.53868 12.3062 8.0937C12.6771 8.64872 12.875 9.30124 12.875 9.96875C12.8739 10.8635 12.518 11.7213 11.8853 12.354C11.2526 12.9867 10.3948 13.3426 9.50001 13.3438Z" />
    </svg>
      <p class="weather__city">${location}</p>
    </div>
  </div>
</div>
  <img class="weather__img" src="https://openweathermap.org/img/wn/${weatherIcon}@4x.png" alt="${weatherStatus}" />
  <p class="weather__day">
  <div class="weather__date">
  <p class="weather__day">
  ${today}</br>
 
  </p>
</div>
<div class="weather__button">
<button class = 'weather__btn'>weather for week</button>
</div>

  `;

  weatherSection.innerHTML = weatherSect;
}
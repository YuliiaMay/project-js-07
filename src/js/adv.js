const banner = document.querySelector('.banner');
const DELAY_BANNER = 30000;
const KEY_DATA_NOW = 'dateNowKey';

let dateNow = Date.now();
const hourInMs = 600000;
const getDataNow = localStorage.getItem("KEY_DATA_NOW");
let timeDifference = Number(getDataNow) +hourInMs;

function callBanner() {

  if (dateNow <= timeDifference) {
    return
  }
  else{

function showBanner() {
  banner.style.display = 'block'
    localStorage.setItem("KEY_DATA_NOW", dateNow);
}

setTimeout(showBanner, DELAY_BANNER);
banner.addEventListener('click', onhideBanner);

function onhideBanner(event) {
  if (
    event.target.classList.contains('banner__button') ||
    event.target.classList.contains('banner__button-cross_icon') ||
    event.target.classList.contains('banner__button-use_icon') ||
    event.target.classList.contains('banner__button-link')

  ) {
    banner.classList.add('banner_hide');
  }
}
}
}

callBanner()
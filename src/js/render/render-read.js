import { getDataFromLocalStorage } from '../api/service';
import { fetchNews, createObj } from '../gallery'
import { READ_NEWS_KEY } from '../storage/add-to-read';


const iconPath = new URL('/src/images/icons.svg', import.meta.url);
const accContainer = document.querySelector('.acc__container');
const emptyContainer = document.querySelector('.empty-response__container');


let dates = [];
let uniqAccordionDays = [];
let readAcc = '';
let readCardArr = [];
let savedReadsCardArr = [];


// ------------
switchReadMarkup();
// ------------


function switchReadMarkup() {
  try {
    savedReadsCardArr = getDataFromLocalStorage(READ_NEWS_KEY);
    
    if (savedReadsCardArr.length !== 0) {
      emptyContainer.classList.add('is-hidden');
      accContainer.classList.remove('is-hidden');
      renderReadNewsPage();
      addReadPageEvents();
    }
  } catch (error) {
    console.log(error.message);
  }
}

function getReadMarkup() {
  savedReadsCardArr.map(card => {
    const newDay = card.day;
    dates.push(newDay);
  })
  
  // масив дат для контейнерів аккардеону
  uniqAccordionDays = Array.from(new Set(dates));

  const filteredDate = uniqAccordionDays.filter(date => date !== undefined);
  const sortedDates = filteredDate.sort((a, b) => b.localeCompare(a));

  for (let i = 0; i < sortedDates.length; i += 1) {
    readCardArr = savedReadsCardArr.filter(card => card.day === sortedDates[i]);

    const readCardsDay = readCardArr.map(card => createObj(card));
    const readMarkup = fetchNews(readCardsDay, accContainer, false).join('');

    readAcc +=
        `<div class="acc__gallery">
          <button class="acc__day-btn js-read-card-open">
            <span>${sortedDates[i]}</span>
            <svg class="acc__btn-icon">
              <use href="${iconPath}#pointer-down"></use></svg>
          </button>
          <div class="news__one-day-read-card-list">
            ${readMarkup}
          </div>
          </div>`;
  }  
  
  return readAcc;
}

function renderReadNewsPage() {
  accContainer.insertAdjacentHTML('afterbegin',  getReadMarkup())
}



function addReadPageEvents() {
  const btnsReadMore = document.querySelectorAll('.js-read-card-open');
  // const btnToFavorite = document.querySelectorAll('');

  btnsReadMore.forEach(btn =>
    btn.addEventListener('click', onDayNewsOpen)
  );

  function onDayNewsOpen(e) {
    const btn = e.target;
    console.log(btn);
    btn.classList.toggle('is-open');
  }

  // btnToFavorite.addEventListener('click', );
}
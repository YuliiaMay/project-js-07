let savedReadsCardArr = [];

import { getDataFromLocalStorage } from '../api/service';
import { fetchNews, fetchPopularNews, createObj, renderCards } from '../gallery'
import { READ_NEWS_KEY } from '../storage/add-to-read';


const iconPath = new URL('/src/images/icons.svg', import.meta.url);


const accContainer = document.querySelector('.acc__container');
const emptyContainer = document.querySelector('.empty-response__container');
const accGallery = document.querySelector('.acc__gallery');
const dayContainer = document.querySelector('.acc__day-block');



let dates = [];
let uniqAccordionDays = [];
let day = '';
let readCardsDay = [];
let sameDayRead = [];

let readMarkupCard = '';



switchReadMarkup();



function switchReadMarkup() {
  try {
    savedReadsCardArr = getDataFromLocalStorage(READ_NEWS_KEY);
    
    if (savedReadsCardArr.length !== 0) {
      emptyContainer.classList.add('is-hidden');
      accContainer.classList.remove('is-hidden');
    }
  } catch (error) {
    console.log(error.message);
  }
}

// function
function getUniqueDaysOfReading(savedReadsCardArr) {
  
  return uniqAccordionDays;
}

// ------------
getReadMarkup();
// ------------



function getReadMarkup() {
  console.log(savedReadsCardArr);
  savedReadsCardArr.map(card => {
    const newDay = card.day;
    dates.push(newDay);
  })
  
  // масив дат для контейнерів аккардеону
  uniqAccordionDays = Array.from(new Set(dates));

  let readAcc = '';

  const filteredDate = uniqAccordionDays.filter(date => date !== undefined);
  const sortedDates = filteredDate.sort((a, b) => b.localeCompare(a));



  // fetchNews(dataNewsArr, newsContainer)
  for (let i = 0; i < sortedDates.length; i += 1) {
    readCardArr = savedReadsCardArr.filter(card => card.day === sortedDates[i]);
  }  
    const readCardsDay = readCardArr.map(card => createObj(card));
  
    const readMarkap = fetchNews(readCardsDay, accContainer, false).join('');

    console.log(readMarkap);
  

        readAcc += 
        `<div class="read-news__list">
          <button class="read-news__btn js-read-news-btn">
            <span>${sortedDates[i]}</span>
            <svg><use href="${iconPath}#down"></use></svg>
          </button>
          <div class="news__lists">
            ${readMarkap}
          </div>
          </div>`;

   // for (let i = 0; i <= readCardArr.length; i += 1) {
    // const readCard = readCardArr.map(card => fetchNews(card)).join('');
    // fetchNews(readCard);
  return readAcc;

  }




function renderReadNewsPage(readAcc) {
  refs.readNewsContainer.innerHTML = readAcc;

}
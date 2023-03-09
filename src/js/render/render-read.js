let savedReadsCardArr = [];

import { getDataFromLocalStorage } from '../api/service';
// import { onReadMoreClick } from '../storage/add-to-read';
import { READ_NEWS_KEY } from '../storage/add-to-read';
// import { fetchNews } from '../gallery';
// import { Loading } from 'notiflix';



const iconPath = new URL('/src/images/icons.svg', import.meta.url);
const accContainer = document.querySelector('.acc__container');
const emptyContainer = document.querySelector('.empty-response__container');
const accGallery = document.querySelector('.acc__gallery');
const dayContainer = document.querySelector('.acc__day-block');



let dates = [];
let uniqAccordionDays = [];


let sameDayRead = [];

let readMarkupCard = '';

switchReadMarkup();



createAcc(uniqAccordionDays, readMarkupCard);
getReadCard(savedReadsCardArr);






function switchReadMarkup() {
  try {
    savedReadsCardArr = getDataFromLocalStorage(READ_NEWS_KEY);
    
    if (savedReadsCardArr.length !== 0) {
      emptyContainer.classList.add('is-hidden');
      accContainer.classList.remove('is-hidden');
      getUniqueDaysOfReading(savedReadsCardArr);

      setReadCardsByDate(savedReadsCardArr, uniqAccordionDays);
      // createAcc(uniqAccordionDays);


      // getReadCard(savedReadsCardArr);
      // createAccordions(uniqAccordionDays);
      // createAccordionMarkup(uniqAccordionDays, savedReadsCardArr);
			// fetchNews(savedReadsCardArr);
    }
  } catch (error) {
    console.log(error.message);
  }
}


function getUniqueDaysOfReading(savedReadsCardArr) {
  savedReadsCardArr.map(card => {
    const newDay = card.day;
    dates.push(newDay);
  })
  
  // масив дат для контейнерів аккардеону
  uniqAccordionDays = Array.from(new Set(dates));
  // console.log(uniqAccordionDays);
  return uniqAccordionDays;
}



function setReadCardsByDate(savedReadsCardArr, uniqAccordionDays) {
  for (const card of savedReadsCardArr) {
    console.log(card.day);
    for (const day of uniqAccordionDays) {
      
      sameDayRead.push(card);
    }
  }
}


function createAcc(savedReadsCardArr) {

  for (const day of savedReadsCardArr) {
  const accMarckup = savedReadsCardArr
        .map(el => {
          return `<div class="acc-item">
                    <button class="acc__date-btn">08.03.2023</button>
                  </div>`
        })
        .join('');
      
    accContainer.insertAdjacentHTML('afterbegin', accMarckup);
    return accMarckup;
    }
      
  }




function getReadCard(savedReadsCardArr) {
  // for (const day of uniqAccordionDays) {
  //   console.log(day);

  readMarkupCard = savedReadsCardArr
    .map(({ media, source, title, abstract, published_date, url, section, id }) => {
      let src = media.map(media => media['media-metadata'][2].url);
        
      return `<div class="card acc__card" data-id="${id}">
                <div class="wrap__img">
                  <img class="card__img is-reading" src="${media}" alt="${source}" />
                  <button type="button" class="item-news__add-to-favorite>
                  <span class="item-news__add-to-favorite-btn">
                    Add to favorite
                      <svg class="item-news__block-icon active-news-icon" width="16" height="16" viewBox="0 0 37 32">
                              <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
                      </svg>
                      </span>
                              <span class="item-news__remove-to-favorite-btn">Remove from favorite
                      <svg class="item-news__block-icon active-news-icon" width="16" height="16" viewBox="0 0 37 32">
                              <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path>
                      </svg></span>
                  </button>
                </div>
                <div class="news__card">
                <div class="news__card--info">
                <h2 class="card__title">${title.substr(0, 55)}</h2>
                <p class="card__description">${abstract.substr(0, 100) + '...'
        }</p>
                </div>
                <div class="card__footer">
                  <span class="card__date">${published_date}</span>
                  <a class="card__ref" target="_blank"
                  rel="noreferrer noopener">Read more</a>
                </div>
                </div>
                <div class="categories">${section}</div>

                <div class="read visually-hidden">
                  <span class="read__main">Already read</span>
                  <svg class="read__main-icon">
                      <use class="icon" href="${iconPath}#done""></use>
                  </svg>
                </div>                
              </div>`
      })
          .join('');


      accGallery.insertAdjacentHTML('beforeend', readMarkupCard)
      return readMarkupCard;
  // }
    
  }





  // -------------- events

accContainer.addEventListener('click', activeAccGallery);

function activeAccGallery(e) {
  const accBtn = e.target;

  
  accBtn.classList.toggle('active');
  accGallery.classList.toggle('active');
  
  

}
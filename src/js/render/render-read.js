let savedReadsCardArr = [];

import { getDataFromLocalStorage } from '../api/service';
import { onReadMoreClick } from '../storage/add-to-read';

import { fetchNews } from '../gallery';

const newsContainer = document.querySelector('.accordion');
const undefinedRef = document.querySelector('.undefined');



// // containerRef.addEventListener('click', onReadMoreClick);
// containerRef.addEventListener('click', e => {
//   // const link = e.target.closest('.card__ref');
//   if (!link) return;
//   link.closest('.card').remove();
//   init();
// });

import { READ_NEWS_KEY } from '../storage/add-to-read';

function chooseReadMarkup() {
  try {
    savedReadsCardArr = getDataFromLocalStorage(READ_NEWS_KEY);

    if (savedReadsCardArr.length !== 0) {
      undefinedRef.classList.add('is-hidden');
      newsContainer.classList.remove('is-hidden');
			fetchNews(savedReadsCardArr);
			getUniqDayArr(savedReadsCardArr);

    }
  } catch (error) {
    console.log(error.message);
  }
}

chooseReadMarkup();
console.log(savedReadsCardArr);

function getUniqDayArr(savedReadsCardArr) {
  let dates = [];
  console.log(savedReadsCardArr);
  savedReadsCardArr.map(card => {
    for (day in card) {
      let hasSameDay = card.includes(day);
      if (!hasSameDay) {
        dates.push(day);
      }
    }
  });
}

// savedReadsCardArr.every(card => card.date !== )

// accordionHeaders.forEach(header => {

//   header.addEventListener('click', () => {
//     const accordionItem = header.parentElement;
//     accordionItem.classList.toggle('active');
//     const accordionContent = accordionItem.querySelector('.accordion-content');
//     accordionContent.classList.toggle('active');
//   });
// });

// renderReadNews();

// const searchBtn = document.querySelector('.search__btn');
// searchBtn.addEventListener('click', getSearchQueryFromRead);
// function getSearchQueryFromRead() {
// }

// function updateUI(searchNews) {
//   const markup = createMarkup(search);
//   readNewsContainer.innerHTML = markup;
//   addEventHandlers();
// }

// function renderReadNews() {
//   // const parsedReadData = getParsedData(READ_NEWS_KEY);
//   // console.log(parsedReadData);

//   // if (!parsedReadData) {
//   //     showEmptyResponse();
//   //     return;
//   // }

//   // // фільтруємо унікальні картки
//   // const savedReadsCardArr = parsedReadData.filter(card => card.read === true);

//   // if (savedReadsCardArr.length < 1) {
//   //     showEmptyResponse();
//   //     return;
//   // }
//   return;
// }

// function createMarkup(cards) {
//   const date = cards.map(card => card.dayRead);

//   if (date.length < 1) {
//     showEmptyResponse();
//   }

//   let markup = '';
//   const uniqDateArr = Array.from(new Set(date));
//   const filteredDateArr = uniqDateArr.filter(date => date !== undefined);
//   const sortedDateArr = filteredDateArr.sort((a, b) => b.localeCompare(a));

//   for (let i = 0; i < sortedDateArr.length; i += 1) {
//     const preparedCardsArr = cards.filter(
//       card => card.dayRead === sortedDateArr[i]
//     );
//     const cardMarkup = preparedCardsArr
//       .map(card => createNewsCard(card))
//       .join('');
//   }

//   return markup;
// }

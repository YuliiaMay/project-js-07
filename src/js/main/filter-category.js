import axios from 'axios';
import { renderButtons, renderSelect } from '../render/render-filter';
import { createObj, fetchNews, renderCategoryCard } from '../gallery';

const baseUrlV2 = 'https://api.nytimes.com/svc/search/v2';
const baseUrlV3 = 'https://api.nytimes.com/svc/news/v3';
const key = '1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ';
const categoryUrl = '/content/section-list.json';
const searchUrl = '/articlesearch.json';
const newsContainer = document.querySelector('.news__container');

export const FILTERED_NEWS_URL = `${baseUrlV3}${categoryUrl}?api-key=${key}`;

let categoriesArray = [];

const keyLocalStorage = 'selected-categories';

setDefaultParams();

/*заміникти на правильну назву ключа, правильну назву взяти у того хто робить календар!
видалити значення з 18 по 20 радок!
*/
const selectedDateKey = 'selected-date';

let date = new Date('December 25, 2022 23:15:30');
let day = date.getTime();

localStorage.setItem(selectedDateKey, day);

const filtersContainer = document.querySelector('.category__filter-container');

filtersContainer.addEventListener('click', onFilterCategories);

function onFilterCategories(event) {
  let categoryName = event.target.value;
  let type = event.target.dataset.type;

  if (type === 'button') {
    event.target.classList.toggle('active');
  }
  // } else {
  //   event.target.classList.add('active');
  // }

  const hasCategory = categoriesArray.includes(categoryName);

  if (!hasCategory) {
    categoriesArray.push(categoryName);
  } else {
    const categoryIndex = categoriesArray.indexOf(categoryName);
    categoriesArray.splice(categoryIndex, 1);
  }

  localStorage.setItem(keyLocalStorage, JSON.stringify(categoriesArray));

  filterCategories()
    .then(docs => {
      const refCard = document.querySelectorAll('.card');
      refCard.forEach(e => e.remove());

      return docs.map(article => createObj(article));
    })
    .then(articles => fetchNews(articles, newsContainer))
    .catch(error => {
      /*в цьому місці поставити картинку заглушку якщо нічого не знайдено по категорії!
      після того як буде верстка!
      */
      console.log(error);
    });
}

function getCategories() {
  let url = `${baseUrlV3}${categoryUrl}?api-key=${key}`;

  return axios.get(url).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data.results;
  });
}

function filterCategories() {
  const categoriesValue = JSON.parse(localStorage.getItem(keyLocalStorage));
  if (!categoriesValue) {
    return;
  }
  const selectedDate = localStorage.getItem(selectedDateKey);

  let searchWord;
  let params;

  if (selectedDate) {
    params = `&pub_date=${selectedDate}`;
  }

  if (categoriesValue.length !== 0) {
    searchWord = categoriesValue.join(', ');
  } else {
    searchWord = 'Business';
  }
  const url = `${baseUrlV2}${searchUrl}?api-key=${key}&fq=news_desk:(${searchWord})${params}`;
  return axios.get(url).then(response => {
    if (response.status !== 200 || response.data.response.docs.length === 0) {
      throw new Error(response.status);
    }
    return response.data.response.docs;
  });
}

function setDefaultParams() {
  getCategories()
    .then(categories => {
      const categriesButtons = categories.slice(0, 6);
      const categoriesSelect = categories.slice(6);

      categriesButtons.map(button => {
        renderButtons(button);
        //щоб залишити активні кнопки при перезагрузці

        // if (categoriesValue) {
        //   let curentCategories = categoriesValue.includes(button.display_name);
        //   if (curentCategories) {
        //     const buttonName = document.querySelector(
        //       `[data-name="${button.display_name}"]`
        //     );
        //     buttonName.classList.add('active');
        //   }
        // }
      });
      renderSelect(categoriesSelect, 'desctop-select');

      //побудова селектів для мобільного!

      renderSelect(categories, 'mobile-select');
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      //очищення локал стореджа якщо не потрібно залишати активні кнопки при перезагрузці
      localStorage.removeItem(keyLocalStorage);
      categoriesArray = [];
    });

  const categoriesValue = JSON.parse(localStorage.getItem(keyLocalStorage));

  if (categoriesValue && categoriesValue.length !== 0) {
    searchWord = categoriesValue.join(', ');
    categoriesArray = [...categoriesValue];

    const url = `${baseUrlV2}${searchUrl}?api-key=${key}&fq=news_desk:(${searchWord})`;

    return axios.get(url).then(response => {
      if (response.status !== 200 || response.data.response.docs.length === 0) {
        throw new Error(response.status);
      }
      return response.data.response.docs;
    });
  }
}

import axios from 'axios';
import { renderButtons, renderSelect } from '../render/render-filter';
import { createObj, fetchNews, renderCategoryCard } from '../gallery';
import getDateAndCategoryNews from './calander-and-categories-api';

const baseUrlV3 = 'https://api.nytimes.com/svc/news/v3';
const key = '1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ';
const categoryUrl = '/content/section-list.json';
const newsContainer = document.querySelector('.news__container');
const notFound = document.querySelector('.empty-res');

let categoriesArray = [];

const KEY_LOCAL_STORAGE = 'selected-categories';

setDefaultParams();

/*заміникти на правильну назву ключа, правильну назву взяти у того хто робить календар!
видалити значення з 18 по 20 радок!
*/
const SELECTED_DATE_KEY = 'selected-date';

function onFilterCategoriesChange(event) {
  onFilterCategories(event);
}

function onFilterCategoriesClick(event) {
  onFilterCategories(event);
}

function onFilterCategories(event) {
  // для того щоб можна було вибрати тільки 1 значення
  const buttonsName = document.querySelectorAll('.category__filter-btn');

  buttonsName.forEach(button => {
    button.classList.remove('active');
  });

  let categoryName = event.target.value;
  let type = event.target.dataset.type;

  if (type === 'button') {
    event.target.classList.toggle('active');
  }

  const hasCategory = categoriesArray.includes(categoryName);

  if (!hasCategory) {
    // дає вибирати тільки 1 значення фільтра
    categoriesArray = [];

    categoriesArray.push(categoryName);
  } else {
    const categoryIndex = categoriesArray.indexOf(categoryName);
    categoriesArray.splice(categoryIndex, 1);
  }

  localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(categoriesArray));

  const selectedDate = localStorage.getItem(SELECTED_DATE_KEY) || '';

  getDateAndCategoryNews(selectedDate, categoryName)
    .then(docs => {
      const refCard = document.querySelectorAll('.card');
      refCard.forEach(e => e.remove());

      notFound.classList.add('is-hidden');
      newsContainer.style.display = 'flex';

      return docs.map(article => createObj(article));
    })
    .then(articles => fetchNews(articles, newsContainer))
    .catch(error => {
      /*в цьому місці поставити картинку заглушку якщо нічого не знайдено по категорії!
      після того як буде верстка!
      */
      notFound.classList.remove('is-hidden');
      newsContainer.style.display = 'none';
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

function setDefaultParams() {
  getCategories()
    .then(categories => {
      const categoriesButtons = categories.slice(0, 6);
      const categoriesSelect = categories.slice(6);

      categoriesButtons.map(button => {
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
      localStorage.removeItem(KEY_LOCAL_STORAGE);
      localStorage.removeItem(SELECTED_DATE_KEY);
      categoriesArray = [];
    });
}

export { onFilterCategoriesClick, onFilterCategoriesChange };

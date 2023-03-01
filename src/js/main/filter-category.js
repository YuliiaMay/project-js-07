import axios from 'axios';
import { renderButtons, renderSelect } from '../render/render-filter';

const baseUrlV2 = 'https://api.nytimes.com/svc/search/v2';
const baseUrlV3 = 'https://api.nytimes.com/svc/news/v3';
const key = '1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ';
const categoryUrl = '/content/section-list.json';
const searchUrl = '/articlesearch.json';

const categoriesArray = [];

const keyLocalStorage = 'selected-categories';

const filtersContainer = document.querySelector('.category__filter-container');
filtersContainer.addEventListener('click', onFilterCategories);

function onFilterCategories(event) {
  let categoryName = event.target.value;

  categoriesArray.push(categoryName);
  console.log(categoryName);
  localStorage.setItem(keyLocalStorage, JSON.stringify(categoriesArray));
}

function getCategories() {
  const url = `${baseUrlV3}${categoryUrl}?api-key=${key}`;
  return axios.get(url).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data.results;
  });
}

getCategories()
  .then(categories => {
    const categriesButtons = categories.slice(0, 6);
    const categoriesSelect = categories.slice(6);

    categriesButtons.map(button => {
      renderButtons(button);
    });
    renderSelect(categoriesSelect);
  })
  .catch(error => {
    console.log(error);
  });

function filterCategories() {
  const searchWord = JSON.parse(localStorage.getItem(keyLocalStorage)).join(
    ', '
  );
  const url = `${baseUrlV2}${searchUrl}?api-key=${key}&fq=news_desk:(${searchWord})`;
  return axios.get(url);
}
filterCategories();

//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=yourkey&fq=news_desk:("Sports", "Foreign")

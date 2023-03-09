import SearchNewsApi from './news-service';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createObj, fetchNews } from './gallery';
import { paginate } from './main/pagination';

const input = document.getElementById('search-field__input');
const form = document.querySelector('.search__form');
const newsContainer = document.querySelector('.news__container');
const errorContainer = document.querySelector(".empty-search");
const weatherContainer = document.querySelector(".news__container--weather");
const pagination = document.getElementById("pagination");

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let inputValue = input.value;

  async function fetchNewsSearch(page = 0) {
    const searchNewsClass = new SearchNewsApi(inputValue);
    searchNewsClass
      .searchNews()
      .then(articles => { 
        return articles.response.docs.map(newsArr => newsArr)})
      .then(data => {
        return data.map(article => createObj(article))})
      .then(arr => {
        const refCard = document.querySelectorAll('.card');
        refCard.forEach(e => e.remove());
        errorContainer.classList.add("is-hidden");
        weatherContainer.classList.remove("is-hidden");
        pagination.classList.remove("is-hidden");
        fetchNews(arr, newsContainer);
      })
      .catch(error => {
        const refCard = document.querySelectorAll('.card');
        refCard.forEach(e => e.remove());
        errorContainer.classList.remove("is-hidden");
        weatherContainer.classList.add("is-hidden");
        pagination.classList.add("is-hidden");
      });

  }
  paginate(fetchNewsSearch, 30);

  form.reset();
}
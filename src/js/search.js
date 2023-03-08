import SearchNewsApi from './news-service';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createObj, fetchNews } from './gallery';
import { paginate } from './main/pagination';

const input = document.getElementById('search-field__input');
const form = document.querySelector('.search__form');
const newsContainer = document.querySelector('.news__container');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  let inputValue = input.value;

  async function fetchNewsSearch(page = 0) {
    const searchNewsClass = new SearchNewsApi(inputValue, page);
    searchNewsClass
      .searchNews()
      .then(articles => articles.response.docs.map(res => res))
      .then(data => data.map(article => createObj(article)))
      .then(arr => {
        const refCard = document.querySelectorAll('.card');
        refCard.forEach(e => e.remove());
        fetchNews(arr, newsContainer);
      })
      .catch(error => Notify.failure('no articles'));
  }
  paginate(fetchNewsSearch, 30);

  form.reset();
}

import axios from 'axios';

const POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;

const newsContainer = document.querySelector('.news__container');
const fetchBtn = document.querySelector('.render__btn');

fetchBtn.addEventListener('click', fetchPopularNews);

// fetchPopularNews();

async function fetchPopularNews() {
  let dataNews = await axios.get(POPULAR_NEWS_URL);
  fetchNews(dataNews);
}

function fetchNews(dataNews) {
  let dataNewsArr = dataNews.data.results;
  console.log(dataNewsArr);
  console.log(dataNewsArr[7].media[0]['media-metadata'][2].url);
  const card = dataNewsArr
    .map(
      dataNewsEl => `<div class="card" id="card">
  <div class="wrap__img">
    <img class="card__img is-reading" src="${
      dataNewsArr[7].media[0]['media-metadata'][2].url
    }" alt="${dataNewsEl.source}" />
    <button type="button" class="card__favorite">
      <span class="favorite__text">Add to favorite</span>
      <svg class="icon-heart checked">
        <use class="icon" href="././images/symbol.svg#icon-empty-heart"></use>
      </svg>
    </button>
  </div>
  <h2 class="card__title">${dataNewsEl.title}</h2>
  <p class="card__description">${dataNewsEl.abstract.substr(0, 100) + '...'}</p>
  <div class="card__footer">
    <span class="card__date">${dataNewsEl.published_date}</span>
    <a class="card__ref" href="${dataNewsEl.url}">Read more</a>
  </div>

  <div class="categories">${dataNewsEl.section}</div>
  <div class="read visually-hidden">Have read</div>
</div>`
    )
    .join('');
  newsContainer.insertAdjacentHTML('beforeend', card);
}


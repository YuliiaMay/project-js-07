import axios from 'axios';

const POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;

const newsContainer = document.querySelector('.news__container');
const fetchBtn = document.querySelector('.render__btn');

fetchPopularNews();

async function fetchPopularNews() {
  let dataNews = await axios.get(POPULAR_NEWS_URL);
  fetchNews(dataNews);
}


function fetchNews(dataNews) {
  let dataNewsArr = dataNews.data.results;

  const card = dataNewsArr
    .map(({ media, source, title, abstract, published_date, url, section }) => {
      let src = media.map(media => media['media-metadata'][2].url);

      return `<div class="card" id="card">
                <div class="wrap__img">
                  <img class="card__img is-reading" src="${src}" alt="${source}" />
                  <button type="button" class="card__favorite">
                    <span class="favorite__text">Add to favorite</span>
                    <svg class="icon-heart checked">
                      <use class="icon" href="././images/icons.svg#empty-heart"></use>
                    </svg>
                  </button>
                </div>
                <div class="news__card">
                <div class="news__card--info">
                <h2 class="card__title">${title.substr(0, 55)}</h2>
                <p class="card__description">${abstract.substr(0, 100) + '...'}</p>
                </div>
                <div class="card__footer">
                  <span class="card__date">${published_date}</span>
                  <a class="card__ref" href="${url}" target="_blank"
                  rel="noreferrer noopener">Read more</a>
                </div>
                </div>
                <div class="categories">${section}</div>
                <div class="read visually-hidden">Have read</div>                
              </div>`
})
    .join('');
  newsContainer.insertAdjacentHTML('beforeend', card);

  return card;
}


export {fetchNews, fetchPopularNews};
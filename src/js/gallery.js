import axios from 'axios';
import { getDataFromLocalStorage } from './api/service';

const POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;

const newsContainer = document.querySelector('.news__container');

fetchPopularNews();

async function fetchPopularNews() {
  try {
    let dataNews = await axios.get(POPULAR_NEWS_URL);
    fetchNews(dataNews.data.results, newsContainer);
  } catch (error) {
    console.log(error.message);
  }
}

function fetchNews(dataNewsArr, newsContainer) {
  const dataArray = getDataFromLocalStorage('news');
  const arrayId = dataArray.map(({ id }) => id);
  // console.log(arrayId);
  const card = dataNewsArr
    .map(
      ({
        id,
        media,
        source,
        title,
        abstract,
        published_date,
        url,
        section,
      }) => {
        let src = media.length
          ? media.map(media => media['media-metadata'][2].url)
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU';
        return `<div class="card" data-id="${id}">
                <div class="wrap__img">
                  <img class="card__img is-reading" src="${src}" alt="${source}" />
                  <button type="button" class="item-news__add-to-favorite ${
                    arrayId.includes(id) ? 'hidden-span' : ''
                  }">
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
                <p class="card__description">${
                  abstract.substr(0, 100) + '...'
                }</p>
                </div>
                <div class="card__footer">
                  <span class="card__date">${published_date}</span>
                  <a class="card__ref" target="_blank"
                  rel="noreferrer noopener">Read more</a>
                </div>
                </div>
                <div class="categories">${section}</div>
                <div class="read visually-hidden">Have read</div>                
              </div>`;
      }
    )
    .join('');
  newsContainer.insertAdjacentHTML('beforeend', card);


  // return card;
}

//--------------функція для рендера новин по категоріям!!-----------------

function renderCategoryCard(docs) {
  newsContainer.innerHTML = '';
  const card = docs
    .map(
      ({ source, abstract, pub_date, web_url, section_name, multimedia }) => {
        let src = multimedia.length
          ? `https://static01.nyt.com/${multimedia[0].url}`
          : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU';
  
        return `<div class="card" id="card">
                <div class="wrap__img">
                  <img class="card__img is-reading" src="${src}" alt="${source}" />
                  <button type="button" class="card__favorite">
                    Add to favorite
                    <svg class="icon-heart unchecked">
                      <use class="icon" href="/icons.adfc4680.svg#empty-heart"></use>
                    </svg>
                    <svg class="icon-heart is-hidden-btn">
                      <use class="icon" href="/icons.adfc4680.svg#fill-heart"></use>
                    </svg>
                  </button>
                </div>
                <div class="news__card">
                <div class="news__card--info">
                <h2 class="card__title">${abstract.substr(0, 55)}</h2>
                <p class="card__description">${
                  abstract.substr(0, 100) + '...'
                }</p>
                </div>
                <div class="card__footer">
                  <span class="card__date">${pub_date}</span>
                  <a class="card__ref" href="${web_url}" target="_blank"
                  rel="noreferrer noopener">Read more</a>
                </div>
                </div>
                <div class="categories">${section_name}</div>
                <div class="read visually-hidden">Have read</div>                
              </div>`;
      }
    )
    .join('');
  newsContainer.insertAdjacentHTML('beforeend', card);

  return card;
}

export { fetchNews, fetchPopularNews, renderCategoryCard };

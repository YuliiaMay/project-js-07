import axios from 'axios';
import { getDataFromLocalStorage } from './api/service';
import { paginate, getPerPage } from './main/pagination';

let perPage = getPerPage();

const POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;
const QUERY_NEWS_URL =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20230301&end_date=20230306&page=0&facet=false&facet_fields=news_desk&facet_filter=false&q=cat&api-key=1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ';

const iconPath = new URL('../images/icons.svg', import.meta.url);
const newsContainer = document.querySelector('.news__container');
let card = [];


// async function fetchPopularNews() {
//   try {
//     let dataNews = await axios.get(POPULAR_NEWS_URL);
//     const arr = dataNews.data.results.map(article => createObj(article));
//     fetchNews(arr, newsContainer);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

function fetchPopularNews() {
  try {
    return axios.get(POPULAR_NEWS_URL);
  } catch {}
}

async function start() {
  const dataNews = await fetchPopularNews();
  const arr = dataNews.data.results.map(article => createObj(article));
  fetchNews(arr, newsContainer);
}

//!=====================================================

const objKeys = {
  id: ['id', 'id', '_id'],
  media: ['media', 'multimedia', 'multimedia'],
  source: ['source', 'source', 'source'],
  title: ['title', 'headline', 'headline'],
  abstract: ['abstract', 'abstract', 'abstract'],
  published_date: ['published_date', 'pub_date', 'pub_date'],
  url: ['url', 'web_url', 'url'],
  section: ['section', 'section_name', 'section_name'],
  day: ['day']
};

function createObj(response) {
  const settingsObj = objKeys;
  const newObj = {};

  for (let keySet in settingsObj) {
    settingsObj[keySet].forEach(key => {
      if (key in response) {
        newObj[keySet] = response[key];
      }
    });
  }
  if ('multimedia' in response) {
    try {
      const prefixUrlImg = 'http://static01.nyt.com/';
      newObj['media'] = prefixUrlImg + newObj.media[0].url;
    } catch (error) {
      newObj['media'] =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU';
    }

    newObj['title'] = newObj.title.main;
  } else if ('media' in response) {
    try {
      newObj['media'] = newObj.media[0]['media-metadata'][2].url;
    } catch (error) {
      newObj['media'] =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU';
    }
  }

  return newObj;
}
//!=====================================================

function fetchNews(dataNewsArr, newsContainer, isTrue = true) {
  card = [];
  const dataArray = getDataFromLocalStorage('news');
  const arrayId = dataArray.map(({ id }) => id);

  card = dataNewsArr.map(
    ({ id, media, source, title, abstract, published_date, section, url }) => {
      return [
        `<div class="card" data-id="${id}">
                <div class="wrap__img">
                  <img class="card__img is-reading" src="${media}" alt="${source}" />
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
                      <svg class="item-news__block-icon-full active-news-icon" width="16" height="16" viewBox="0 0 37 32">
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
                  <a class="card__ref" target="_blank" href="${url}"
                  rel="noreferrer noopener">Read more</a>
                </div>
                </div>
                <div class="categories">${section}</div>

                <div class="read visually-hidden">
                  <span class="read__main">Already read</span>
                  <svg class="read__main-icon">
                      <use class="icon" href="${iconPath}#done"></use>
                  </svg>
                </div>                
              </div>`,
      ];
    }
  );


  // .join('');
  if (isTrue) {
    for (let i = 0; i < perPage && i < card.length; i++) {
      newsContainer.insertAdjacentHTML('beforeend', card[i]);
    }
  }
  
  return card;
}

function renderCards(page, perPage) {
  const renderedPageCount = page * perPage;

  for (let i = 0; i < card.length; i++) {
    if (
      i > renderedPageCount - perPage &&
      card[i] !== undefined &&
      i <= renderedPageCount
    ) {
      newsContainer.insertAdjacentHTML('beforeend', card[i]);
    }
  }
}

paginate(start);

export { fetchNews, fetchPopularNews, createObj, renderCards };

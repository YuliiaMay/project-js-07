import axios from 'axios';

const POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;

const newsContainer = document.querySelector('.news__container');

fetchPopularNews();

async function fetchPopularNews() {
  let dataNews = await axios.get(POPULAR_NEWS_URL);
  fetchNews(dataNews);
}

function fetchNews(dataNews) {
  let dataNewsArr = dataNews.data.results;
  const card = dataNewsArr
    .map(({ media, source, title, abstract, published_date, url, section }) => {
      let src = media.length
        ? media.map(media => media['media-metadata'][2].url)
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
                <h2 class="card__title">${title.substr(0, 55)}</h2>
                <p class="card__description">${
                  abstract.substr(0, 100) + '...'
                }</p>
                </div>
                <div class="card__footer">
                  <span class="card__date">${published_date}</span>
                  <a class="card__ref" href="${url}" target="_blank"
                  rel="noreferrer noopener">Read more</a>
                </div>
                </div>
                <div class="categories">${section}</div>
                <div class="read visually-hidden">Have read</div>                
              </div>`;
    })
    .join('');
  newsContainer.insertAdjacentHTML('beforeend', card);

  return card;
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

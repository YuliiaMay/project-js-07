//  не підключений


// import axios from 'axios';
// import getParsedData from '../storage/add-to-read'



export const READ_NEWS_KEY = 'read-news';

const emptyRes = document.querySelector('.empty-res');
const readNewsContainer = document.querySelector('.read-page__container');





export function createNewsCard({ id, media, abstract, title, published_date, url, uri, favorite, read, source }, orderNumber) {
    let isRead = false;
    let isFavorite = false;
    const parsedData = getParsedData(READ_NEWS_KEY);

    if (parsedData) {
        const filteredData = parsedNews.find(card => {
            return card.id === id;
        });

        if (filteredData) {
            isRead = filteredData.read;
            isFavorite = filteredData.favorite;
        }
    }

    return `
        <div class="card" data-id="${id}" ${isRead ? 'opacity' : ''}" style = "order:${orderNumber ? orderNumber : 0}">
            <div class="wrap__img">
                <img class="card__img is-reading" src="${media}" alt="${source}" />
                <button type="button" class="card__favorite active">
                    Add to favorite
                <svg class="icon-empty-heart">
                    <use class="icon" href="/icons.adfc4680.svg#empty-heart"></use>
                </svg>
                <svg class="icon-heart">
                    <use class="icon" href="/icons.adfc4680.svg#fill-heart is-hidden-icon"></use>
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
                    <a class="card__ref" target="_blank" rel="noreferrer noopener">Read more</a>
                </div>
            </div>
            <div class="categories">${uri}</div>
            <div class="read visually-hidden ${!isRead ? 'hidden' : ''}">Have read</div>                
        </div>
    
    `
}






export function showEmptyResponse() {
    emptyRes.classList.remove('is-hidden');
    readNewsContainer.classList.add('is-hidden');
}


// для поля пошуку
function hideEmptyResponse() {
    emptyRes.classList.add('is-hidden');
    readNewsContainer.classList.remove('is-hidden');
}


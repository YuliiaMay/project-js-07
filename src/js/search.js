import SearchNewsApi from "./news-service";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

//const buttonForSearch = document.querySelector(".search__btn");
const input = document.getElementById("search-field__input");
const form = document.querySelector(".search__form");
//const header =document.querySelector(".header");
const newsContainer = document.querySelector('.news__container');

const searchNewsClass = new SearchNewsApi();

form.addEventListener("submit", onFormSubmit);
//buttonForSearch.addEventListener("click", showResult);

function onFormSubmit(event) {
    event.preventDefault();

    let inputValue = input.value;

   

    searchNewsClass.changeSearchQuery(inputValue);
    //searchNewsClass.resetPage();

    // const refCard = document.querySelectorAll('.card');
    // refCard.forEach(e => e.remove());

    searchNewsClass.searchNews()
    .then(articles => {
      let docs = articles.docs;
      docs.map(article => {
        renderArticle()
      })
})
    .catch(error => {
    return Notify.failure("We haven‘t found news from this category")
    // const poster =`<div class="error ">
    //         <div class="error__container">
                // <p class="error___title">We haven't found news from </br> this category</p>
                // <picture>
                //     <source
                //         srcset="/src/images/error-image/error-1x-dekstop-min.png 1x, /src/images/error-image/error-2x-dekstop-min.png 2x"
//                         type="image/png" media="(min-width: 1279.98px)" />
//                     <source
//                         srcset="/src/images/error-image/error-1x-tab-min.png 1x, /src/images/error-image/error-2x-tab-min.png 2x"
//                         type="image/png" media="(min-width: 768px)" />
//                     <source
//                         srcset="/src/images/error-image/error-1x-mob-min.png 1x, /src/images/error-image/error-2x-mob-min.png 2x"
//                         type="image/png" media="(mix-width: 480px)" />
//                     <img class="error___picture" src="/src/images/error-image/error-image.min.png"
//                         alt="error search picture" />
//                 </picture>
//             </div>`
//             header.insertAdjacentHTML("beforeend", poster)
})
    .finally(() => form.reset())
}

function renderArticle(articles) {
  
    const { docs, source, headline, abstract, pub_date, url, section_name, _id } = article;
    const card = `<div class="card" id="${_id}">
                <div class="wrap__img">
                  <img class="card__img is-reading" src="${src}" alt="${source}" />
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
                <h2 class="card__title">${headline.substr(0, 55)}</h2>
                < class="card__description">${
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
              </div>`

  
              newsContainer.insertAdjacentHTML('afterbegin', card);
}


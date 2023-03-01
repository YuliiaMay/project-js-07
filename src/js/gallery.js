// const axios = require('axios');

// const URL =
//   'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A';

const newsContainer = document.querySelector('.news__container');
const fetchBtn = document.querySelector('.render__btn');

fetchBtn.addEventListener('click', fetchPopularNews);

// fetchPopularNews();

async function fetchPopularNews() {
  const dataNews = await fetch(
    `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`
  )
    .then(dataNews => {
      return dataNews.json();
    })
    .then(results => {
      return results;
    })
    .then(results => {
      return results.results;
    })
    .then(dataNews => fetchNews(dataNews));
}

function fetchNews(dataNews) {
  let dataNewsArr = dataNews;
  const card = dataNewsArr
    .map(
      dataNews =>
        `<div class="news__container--card">
        <img class="news__img" src="https://scontent-iev1-1.xx.fbcdn.net/v/t39.30808-6/307279357_632405371581769_4617907306119132376_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=e3ZI67Dl1nIAX-9KsMU&_nc_ht=scontent-iev1-1.xx&oh=00_AfAPGt6FYKrMd7pF6fcFcp5aB-zNeZsL3MMDEVJG6aZCzw&oe=6403F5CD" width=100; height=100 alt="photo">
        <h3 class="news__title">${dataNews.title}</h3>
        <p class="news__inform">${dataNews.abstract}</p>
        <div class="news__info">
        <p class="news__info--data"">${dataNews.published_date}</p>
        <p class="news__info--more"">Read more</p>
        </div>
    </div>`
    )
    .join('');
  console.log(card);
  newsContainer.insertAdjacentHTML('beforeend', card);
}

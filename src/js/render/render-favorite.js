import { getDataFromLocalStorage } from '../api/service';
import { onBtnFavoriteClick } from '../storage/add-to-favorite';

import { fetchNews } from '../gallery';

const containerRef = document.querySelector('.favorite__container');
const errorRef = document.querySelector('.error');
console.log(containerRef);
console.log(145788);

containerRef.addEventListener('click', onBtnFavoriteClick);
containerRef.addEventListener('click', e => {
  const btn = e.target.closest('.item-news__add-to-favorite');
  if (!btn) return;
  btn.closest('.card').remove();
  init();
});

function init() {
  try {
    const data = getDataFromLocalStorage('news');

    if (!data.length) {
      errorRef.classList.remove('is-hidden');
      containerRef.classList.add('is-hidden');
      return;
    }
    errorRef.classList.add('is-hidden');
    containerRef.classList.remove('is-hidden');
    fetchNews(data, containerRef);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

init();

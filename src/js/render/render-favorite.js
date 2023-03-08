import { getDataFromLocalStorage } from '../api/service';
import { onBtnFavoriteClick } from '../storage/add-to-favorite';

import { createObj, fetchNews } from '../gallery';

const containerRef = document.querySelector('.favorite__container');
const errorRef = document.querySelector('.error');

containerRef.addEventListener('click', onBtnFavoriteClick);
containerRef.addEventListener('click', e => {
  const btn = e.target.closest('.item-news__add-to-favorite');
  if (!btn) return;
  btn.closest('.card').remove();
  init();
});

async function init() {
  try {
    const data = await getDataFromLocalStorage('news');

    if (!data.length) {
      errorRef.classList.remove('is-hidden');
      containerRef.classList.add('is-hidden');
      return;
    }
    errorRef.classList.add('is-hidden');
    containerRef.classList.remove('is-hidden');
    const arr = await data.map(article => createObj(article));

    const refCard = document.querySelectorAll('.card');
    refCard.forEach(e => e.remove());

    fetchNews(arr, containerRef);
  } catch (error) {
    console.log(error.message);
  }
}

init();

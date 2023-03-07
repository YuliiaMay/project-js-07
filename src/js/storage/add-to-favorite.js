import axios from 'axios';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../api/service';

// ===========================================//

const galleryEl = document.querySelector('.news__gallery');
// const favoriteSection = document.querySelector('.favorite__section');
// const favoriteList = document.querySelector('.favorite__container');
// const errorCard = document.querySelector('.error');
console.log(galleryEl);
//////////////////////////////////////
const POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;
async function fetchPopularNews() {
  let { data } = await axios.get(POPULAR_NEWS_URL);
  console.log(data);
  return data;
}
///////////////////////////////////

if (galleryEl) galleryEl.addEventListener('click', onBtnFavoriteClick);

let dataFavorite = null;
export async function onBtnFavoriteClick(e) {
  try {
    const btn = e.target.closest('.item-news__add-to-favorite');
    if (!btn) return;

    btn.classList.toggle('hidden-span');
    const idCard = btn.closest('.card').dataset.id;

    const newsArray = getDataFromLocalStorage('news');

    const indexElem = newsArray.findIndex(
      ({ id }) => Number(id) === Number(idCard)
    );
    console.log('indexElem ', indexElem);

    if (indexElem > -1) {
      newsArray.splice(indexElem, 1);
    } else {
      if (!dataFavorite) {
        const { results } = await fetchPopularNews();
        dataFavorite = results;
      }
      const obj = dataFavorite.find(({ id }) => Number(id) === Number(idCard));
      newsArray.push(obj);
    }
    setDataToLocalStorage('news', newsArray);
  } catch (error) {
    console.log(error.message);
  }
}


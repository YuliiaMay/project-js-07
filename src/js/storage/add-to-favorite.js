import { getDataFromLocalStorage, setDataToLocalStorage } from '../api/service';
import { getCard } from '../gallery';

// ===========================================//

const galleryEl = document.querySelector('.news__gallery');

if (galleryEl) galleryEl.addEventListener('click', onBtnFavoriteClick);

export async function onBtnFavoriteClick(e) {
  try {
    const btn = e.target.closest('.item-news__add-to-favorite');
    if (!btn) return;

    btn.classList.toggle('hidden-span');

    const idCard = btn.closest('.card').dataset.id;
    const newsArray = getDataFromLocalStorage('news');

    //!===============================

    const dataFavorite = getCard();

    const oneCard = dataFavorite.find(
      ({ id }) => String(id) === String(idCard)
    );

    if (newsArray.every(card => String(idCard) !== String(card.id))) {
      newsArray.push(oneCard);
      setDataToLocalStorage('news', newsArray);
    }

    if (!btn.classList.contains('hidden-span')) {
      const element = newsArray.find(({ id }) => String(id) === String(idCard));

      const indexForDel = Number(newsArray.indexOf(element));

      newsArray.splice(indexForDel, 1);
      setDataToLocalStorage('news', newsArray);
    }

    //!===============================
  } catch (error) {
    console.log(error.message);
  }
}

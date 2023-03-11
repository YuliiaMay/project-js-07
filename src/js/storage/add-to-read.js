import { getDataFromLocalStorage, setDataToLocalStorage } from '../api/service';
import { getCard } from '../gallery';

export const READ_NEWS_KEY = 'read-news';
const gallery = document.querySelector('.news__gallery');

// перевірка чи клік у межах галереї статтей
if (gallery) {
  gallery.addEventListener('click', onReadMoreClick);
}

async function onReadMoreClick(e) {
  if (e.target.nodeName !== 'A') {
    return;
  }




  const uniqReadCardsArr = getDataFromLocalStorage(READ_NEWS_KEY);

  const cardId = e.target.closest('.card').dataset.id;

  const readData = getCard();

  const date = new Date();
  const currentDate = date.toLocaleString().slice(0, 10);

  const uniqReadCard = readData.find(
    ({ id }) => String(id) === String(cardId)
  );

  uniqReadCard['day'] = currentDate;

  if (
    uniqReadCardsArr.every(
      uniqReadCard => String(cardId) !== String(uniqReadCard.id)
    )
  ) {
    uniqReadCardsArr.push(uniqReadCard);
    setDataToLocalStorage(READ_NEWS_KEY, uniqReadCardsArr);

    const tagAlreadyRead = document.querySelector('.read__already-read');
    tagAlreadyRead.classList.remove('visually-hidden');
    

  }
}

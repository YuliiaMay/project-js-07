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

  const uniqPopReadCard = readData.find(
    ({ id }) => String(id) === String(cardId)
    );
    
    console.log(uniqPopReadCard);
    console.log(uniqReadCardsArr);

  uniqPopReadCard['day'] = currentDate;

//   if (uniqPopReadCard !== undefined) {
    if (
      readData.every(
        uniqPopReadCard => String(cardId) !== String(uniqPopReadCard.id)
      )
    ) {
      uniqReadCardsArr.push(uniqPopReadCard);
      setDataToLocalStorage(READ_NEWS_KEY, uniqReadCardsArr);
    }
  }
// }

import {getParsedData} from '../api/create-card';
import { showEmptyResponse } from '../api/create-card';
import { READ_NEWS_KEY } from "../api/create-card";



let savedReadsCardArr = [];


renderReadNews();


// const searchBtn = document.querySelector('.search__btn');
// searchBtn.addEventListener('click', getSearchQueryFromRead);
// function getSearchQueryFromRead() {
// }


// function updateUI(searchNews) {
//   const markup = createMarkup(search);
//   readNewsContainer.innerHTML = markup;
//   addEventHandlers();
// }


function renderReadNews() {
    // const parsedReadData = getParsedData(READ_NEWS_KEY);
    // console.log(parsedReadData);

    // if (!parsedReadData) {
    //     showEmptyResponse();
    //     return;
    // }

    // // фільтруємо унікальні картки
    // const savedReadsCardArr = parsedReadData.filter(card => card.read === true);


    // if (savedReadsCardArr.length < 1) {
    //     showEmptyResponse();
    //     return;
    // }
    return;
}



function createMarkup(cards) {
    const date = cards.map(card => card.dayRead);

    if (date.length < 1) {
        showEmptyResponse();
    }

    let markup = '';
    const uniqDateArr = Array.from(new Set(date));
    const filteredDateArr = uniqDateArr.filter(date => date !== undefined);
    const sortedDateArr = filteredDateArr.sort((a, b) => b.localeCompare(a));

    for (let i = 0; i < sortedDateArr.length; i += 1) {
        const preparedCardsArr = cards.filter(card => card.dayRead === sortedDateArr[i]);
        const cardMarkup = preparedCardsArr.map(card => createNewsCard(card)).join('');
    }

    return markup;
}



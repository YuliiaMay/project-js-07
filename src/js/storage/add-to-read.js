import axios from 'axios';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../api/service';
import { FILTERED_NEWS_URL } from '../main/filter-category'
// import { fetchPopularNews } from '../storage/add-to-favorite'


const READ_NEWS_KEY = 'read-news';
const gallery = document.querySelector('.news__gallery');

// const uniqReadCardsArr = [];
let readData = null;
let readFiltredData = null;




// const FILTERED_NEWS_URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;
const POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;


async function getPopularNews() {
    let { data } = await axios.get(POPULAR_NEWS_URL);
    // let popularRes = data.data.results;
    
    return data;
}

async function getFilteredNews() {
    let { data } = await axios.get(FILTERED_NEWS_URL);
    return data;
}

async function getFoundNews() {
    let data = await axios.get(FILTERED_NEWS_URL);
    console.log(data);
    return data;
}



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
    
    // popular news ----------------------------
    const popularRes = await getPopularNews();
    readData = popularRes.results;

    const uniqPopReadCard = readData.find(({ id }) => Number(id) === Number(cardId));
    if (uniqPopReadCard !== undefined) {
        if (uniqReadCardsArr.every(uniqPopReadCard => Number(cardId) !== Number(uniqPopReadCard.id))) {
            uniqReadCardsArr.push(uniqPopReadCard);
            
        }
    }
    

    // filtered news ----------------------------
    const filteredRes = await getFilteredNews();
    readFiltredData = filteredRes.response.docs;
    console.log(readFiltredData);

    const uniqFiltrReadCard = readFiltredData.find(({ id }) => Number(id) === Number(cardId));
    if (uniqFiltrReadCard !== undefined) {
        if (uniqReadCardsArr.every(readFiltredData => Number(cardId) !== Number(readFiltredData.id))) {
            uniqReadCardsArr.push(readFiltredData);
            // setDataToLocalStorage(READ_NEWS_KEY, uniqReadCardsArr);
        }
    }
    
    setDataToLocalStorage(READ_NEWS_KEY, uniqReadCardsArr);


    


    

    
}







// 000000000000000000000000000000000000000
// async function getFilteredNews() {
//     let { data } = await axios.get(FILTERED_NEWS_URL);
//     console.log(data);
//     return data;
// }

// async function getFoundNews() {
//     let { data } = await axios.get(POPULAR_NEWS_URL);
//     console.log(data);
//     return data;
// }




export const FILTERED_NEWS_URL = `${baseUrlV3}${categoryUrl}?api-key=${key}`;
import axios from 'axios';
import { getDataFromLocalStorage, setDataToLocalStorage } from '../api/service';
// import { FILTERED_NEWS_URL } from '../main/filter-category'
// import { fetchPopularNews } from '../storage/add-to-favorite'


const READ_NEWS_KEY = 'read-news';

const gallery = document.querySelector('.news__gallery');

// const uniqReadCardArr = [];
let readData = null;
let cardId = null;




// const FILTERED_NEWS_URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;
const POPULAR_NEWS_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A`;

async function getPopularNews() {
    let { data } = await axios.get(POPULAR_NEWS_URL);
    return data;
}

// async function getFilteredNews() {
//     let { data } = await axios.get(FILTERED_NEWS_URL);
//     return data;
// }

// перевірка чи клік у межах галереї статтей   
if (gallery) {
    gallery.addEventListener('click', onReadMoreClick);
}
    
async function onReadMoreClick(e) {
    if (e.target.nodeName !== 'A') {
        return;
    }
    
    const uniqReadCardArr = getDataFromLocalStorage(READ_NEWS_KEY);


    const cardId = e.target.closest('.card').dataset.id;
    

    const { results } = await getPopularNews();
    // const { results } = await getFilteredNews();
    readData = results;

    const uniqReadCard = readData.find(({ id }) => Number(id) === Number(cardId));


    if (uniqReadCard !== undefined) {
        if (uniqReadCardArr.every(uniqReadCard => Number(cardId) !== Number(uniqReadCard.id))) {
            uniqReadCardArr.push(uniqReadCard);
        }
    }

    setDataToLocalStorage(READ_NEWS_KEY, uniqReadCardArr);  
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
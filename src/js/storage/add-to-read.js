import {showEmptyResponse} from './storage-read';
import { READ_NEWS_KEY } from "../api/create-card";

// const gallery = document.querySelector('.news__gallery');

// export const FAV_NEWS_KEY = 'read-news';
const cardsReadArray = [];
const savedReadCard = {};
let cardId = null;

// gallery.addEventListener('click', onReadClick);







export function getParsedData(READ_NEWS_KEY) {
    try {
        const data = localStorage.getItem(READ_NEWS_KEY);
        console.log(111);
        return data === null
            ? undefined
            : JSON.parse(data);
        
    } catch (error) {
        showEmptyResponse();
    }
}




export function addEventsOnCard() {
    const btnsReadMore = document.querySelectorAll('.js-read-news-btn');
    const gallery = document.querySelectorAll('.news__container');
    console.log(btnsReadMore);
    console.log(gallery);
}






// function getRead() {
    
//     const savedReadCard = JSON.parse(localStorage.getItem('READ_NEWS_KEY')) || {};
//     return savedReadCard;
// }

// function onReadClick(e) {
//     if (e.target.nodeName !== 'A') {
//         return;
//     }

//     const btnReadMore = e.target;
//     console.log(btnReadMore);
//     cardId = e.target.closest('.card').dataset.id;

//     getPopularCardData(cardId);
// }

async function getPopularCardData(cardId) {
    // console.log(cardId);
    // console.log(data);
    let response = await axios.get(
        'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A'
    );

    const data = response.data.results;

    

        data.map(
    ({ media, source, title, abstract, published_date, url, section, id }) => {
        const savedReadCard = {};
        
        console.log(savedReadCard);

        let src = media.length
            ? media.map(media => media['media-metadata'][2].url)
            : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU';

        savedReadCard['media'] = `${media}`;
        savedReadCard['source'] = `${source}`;
        savedReadCard['title'] = `${title}`;
        savedReadCard['section'] = `${section}`;
        savedReadCard['abstract'] = `${abstract}`;
        savedReadCard['published_date'] = `${published_date}`;
        savedReadCard['src'] = `${src}`;
        savedReadCard['id'] = `${id}`;


        if (cardsReadArray.every(savedReadCard => Number(savedReadCard['id']) !== Number(cardId))) {
            // cardsReadArray.push(savedReadCard);
            cardsReadArray.push(savedReadCard);
        };
    });

            // console.log(data);
}

// function saveData(data) {
//     // getPopularCardData();

//             // if (savedReadData.every(savedReadCard => Number(savedReadCard.id) !== Number(id)))
//                 // cardsReadArray.push(savedReadCard);
            
//             // console.log(savedReadCard);
//             // console.log(cardsReadArray);

//             // wrightReadCardById(savedReadCard['id'])
            
//             // localStorage.setItem(READ_NEWS_KEY, JSON.stringify(cardsReadArray));
//             // console.log(read);
//         }
// }



// function wrightReadCardById(id) {
//     const readCard = cardsReadArray.find(savedReadCard => savedReadCard.id === id);
    

//     // localStorage.setItem(READ_NEWS_KEY, JSON.stringify(savedReadData));


//     // const savedReadData = JSON.parse(localStorage.getItem(READ_NEWS_KEY));

//     // if (!savedReadData) {
//     //     const readCardArray = [];
//     //     readCardArray.push(readCard);
//     //     localStorage.setItem(READ_NEWS_KEY, JSON.stringify(readCardArray));
//     //     console.log('-');
//     // }
//     // else if (savedReadData.every(savedReadCard => Number(savedReadCard.id) !== Number(id))) {
//     //     console.log('+');
//     //     savedReadData.push(readCard);
//     //     localStorage.setItem(READ_NEWS_KEY, JSON.stringify(storageNews));
//     // }
    
//     };
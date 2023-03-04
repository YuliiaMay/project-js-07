import axios from 'axios';
import { fetchPopularNews } from "../gallery";


// console.log(fetchPopularNews());
// console.log(fetchNews);
// console.log({card});



    const galleryEl = document.querySelector('.news__gallery');
const cardEl = document.querySelector('.card');

console.log(galleryEl);
// console.log(cardEl);

galleryEl.addEventListener('click', onClick);

function onClick(e) {

    console.log(e.currentTarget);

    if (e.target.nodeName === 'BUTTON') {
        console.log('юху');
    }



        if (e.currentTarget.nodeName === 'BUTTON') {
        console.log('+');
    }
}

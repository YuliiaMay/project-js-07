import axios from 'axios';
// import NewsApiService from '../api/api-news';
// import { fetchNews, fetchPopularNews, renderCategoryCard } from "../gallery";


// const newsApiService = new NewsApiService();
// fetchPopularNews();
// saveData(data);
getPopularCardData();

async function getPopularCardData() {
    let response = await axios.get('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A');

    const data = response.data.results;
    
}

// const ar
const cardsFavArray = [];


function saveData(data) {
    const savedFavCard = {};
    data.map(({ media, source, title, abstract, published_date, url, section, id }) => {
    
    let src = media.length
        ? media.map(media => media['media-metadata'][2].url)
        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFBa3G11OUBYADP7ouSBgwiiRzSYorF4dfg&usqp=CAU';
    
    savedFavCard['media'] = `${media}`;
    savedFavCard['source'] = `${url}`;
    savedFavCard['title'] = `${title}`;
    savedFavCard['section'] = `${section}`;
    savedFavCard['abstract'] = `${abstract}`;
    savedFavCard['published_date'] = `${published_date}`;
    savedFavCard['src'] = `${src}`;
    savedFavCard['src'] = `${id}`;
        
        
    cardsFavArray.push(savedFavCard);   
    // console.log(savedFavCar);   
});
}


const FAVORITE_KEY = 'favorite';
// const READ_KEY = 'favorite';


// const galleryEl = document.querySelector('.news__gallery'); 
// const cardEl = document.querySelector('.card'); 


// galleryEl.addEventListener('click', onFavBtnClick); 

// function onFavBtnClick(e) {
//     const btnFav = e.target;

//     if (e.target.nodeName !== 'BUTTON') {
//         return
//     }

//     console.log(cardsFavArray);
// }
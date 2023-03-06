// import axios from 'axios';
// import { fetchPopularNews } from "../gallery";


// // console.log(fetchPopularNews());
// // console.log(fetchNews);
// // console.log({card});



//     const galleryEl = document.querySelector('.news__gallery');
// const cardEl = document.querySelector('.card');

// console.log(galleryEl);
// // console.log(cardEl);

// galleryEl.addEventListener('click', onClick);

// function onClick(e) {

//     console.log(e.currentTarget);

//     if (e.target.nodeName === 'BUTTON') {
//         console.log('юху');
//     }



//         if (e.currentTarget.nodeName === 'BUTTON') {
//         console.log('+');
//     }
// }
// import axios from 'axios'; 
// import createCard from '../card'; 
// import { fetchPopularNews } from '../gallery'; 
 
 
 
// // ===========================================// 
 
 
// const galleryEl = document.querySelector('.news__gallery'); 
// const favoriteSection = document.querySelector('.favorite__section') 
// const favoriteList = document.querySelector('.favorite__container'); 
// const errorCard = document.querySelector('.error'); 
 
// let newLocalStorage = []; 
//  const data = localStorage.getItem('news'); 
 
 
 
// galleryEl.addEventListener('click', onClick); 
// // favoriteList.addEventListener('click', onClick); 
 
// function onClick(e) { 
//     if (e.target.nodeName !== 'BUTTON') { 
//         return; 
//     } 
//     const btnFav = e.target;    
     
//     const data = localStorage.getItem('news'); 
//     // let newLocalStorage = []; 
 
//     console.log(data); 
     
//     if (data) { 
//         newLocalStorage = JSON.parse(localStorage.getItem('news')); 
//     } 
//     const newsIndex = newLocalStorage.findIndex( 
//         item => 
//         item.id === btnFav.closest('.card').dataset.id 
//     ); 
//     console.log(newsIndex); 
//     console.log(btnFav.closest('.card').dataset.id) 
//     btnFav.classList.toggle('hidden-span'); 
     
//     if (newsIndex > -1) { 
//         newLocalStorage[newsIndex].favorite = !newLocalStorage[newsIndex].favorite; 
//         localStorage.setItem('news', JSON.stringify(newLocalStorage)); 
 
//         return; 
//     } 
 
//     addToFavoriteLocalStorage(btnFav); 
// } 
 
// export function addToFavoriteLocalStorage(btnFav) { 
 
//     // let newLocalStorage = []; 
     
// if (data) { 
//     newLocalStorage = JSON.parse(localStorage.getItem('news')); 
//   } 
 
//   const newsIndex = newLocalStorage.findIndex( 
//     item => 
//             item.id === btnFav.closest('.card').id || 
//             item.id === btnFav.closest('.card').dataset.id 
//   ); 
//       if (newsIndex > -1) { 
//     newLocalStorage[newsIndex].favorite = !newLocalStorage[newsIndex].favorite; 
//     localStorage.setItem('news', JSON.stringify(newLocalStorage)); 
//     return; 
//     } 
//     const news = { 
//     id: 
//       btnFav.closest('.card').dataset.id || 
//       btnFav.closest('.card').id, 
 
//     media: btnFav.parentNode.childNodes[1].attributes.src.nodeValue, 
//     section: btnFav.parentNode.nextElementSibling.nextElementSibling.innerText, 
//     title: btnFav.parentNode.parentNode.childNodes[3].children[0].children[0].innerText, 
//     abstract: btnFav.parentNode.parentNode.childNodes[3].children[0].children[1].innerText, 
//     published_date: 
//       btnFav.parentNode.parentNode.childNodes[3].children[1].children[0].innerText, 
//     url: btnFav.parentNode.parentNode.childNodes[3].children[1].children[1].href, 
//     read: false, 
//     favorite: true, 
//     uri: btnFav.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.textContent, 
//     }; 
     
//     for (let i = 0; i < newLocalStorage.length; i += 1) { 
//     if (newLocalStorage[i].uri === news.uri) return; 
//     } 
//     console.log(news) 
 
//   newLocalStorage.push(news); 
// localStorage.setItem('news', JSON.stringify(newLocalStorage)); 
// } 
 
// const savedNews = localStorage.getItem('news'); 
// const parsedNews = JSON.parse(savedNews); 
 
// if (!parsedNews) { 
// errorCard.classList.remove('is-hidden'); 
// favoriteSection.classList.add('is-hidden'); 
//   return; 
// } 
 
// const filteredNews = parsedNews.filter(news => news.favorite === true); 
 
// console.log(filteredNews) 
 
// if (filteredNews.length < 1) { 
// errorCard.classList.remove('is-hidden'); 
// favoriteSection.classList.add('is-hidden'); 
// return; 
// } 
 
 
// filteredNews.map(el => { 
// favoriteList.insertAdjacentHTML('beforeend', createCard(news)); 
// }); 
 
 
 
// // function addMarkup(element, constMarkup) { 
// //   element.insertAdjacentHTML('beforeend', constMarkup); 
// // }
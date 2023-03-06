// import NewsApiService from "./api-news";



// const newsApiService = new NewsApiService();


// function fetchPopularNews() {
//     newsApiService.searchPopularNews()
//         .then(response => console.log(response))
//         .catch(error => console.log(error));
    
//     console.log(response);

// }
// ///////////////////////////////////Любі треба ці функції/////////////////
export function getDataFromLocalStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error.message);
  }
}

export function setDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

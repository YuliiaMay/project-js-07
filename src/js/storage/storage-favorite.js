// import { fetchNews, fetchPopularNews } from '../gallery' 
// function saveFavorite() { 
//     let cardsArrFav = []; 
//     const objFav = { 

//     } 
// } 
//  Ожидает при создании экземпляра строку с ключом локального хранилища. 
//  ** В статическом свойстве Storage.KEYS хранятся возможные ключи. 
//  ** .save(data) - сохранить данные в хранилище 
//  ** .get() - считать данные из хранилища 
//  ** .remove() - удалить запись из хранилища 
//  ** .saveMovie(movie) - сохранить один фильм (добавить в масиив) 
//  ** .deleteMovie(id) - удалить один фильм, по id (удалить из массива) 
//  ** .checkMovie(id) - проверить, есть ли фильм в хранилище, по id 
//  */ 
 
export default class Storage { 
  static KEYS = { 
      FAVORITE: 'news/favorite', 
      READ: 'news/read', 
      }; 
  constructor(key) { 
    this.key = key; 
  } 
  save = data => { 
    try { 
      window.localStorage.setItem(this.key, JSON.stringify(data)); 
    } catch (error) { 
      return null; 
    } 
  }; 
  get = () => { 
    try { 
      return JSON.parse(window.localStorage.getItem(this.key)); 
    } catch (error) { 
      return null; 
    } 
  }; 
  remove = () => { 
    try { 
      return localStorage.removeItem(this.key); 
    } catch (error) { 
      return null; 
    } 
  }; 
  saveCard = item => { 
    const cards = this.get() || []; 
    const updatedCards = [item, ...cards]; 
    this.save(updatedCards); 
  }; 
  deleteCard = id => { 
    const cards = this.get(); 
    const updatedCards = cards?.filter(card => card.id !== id); 
    this.save(updatedCards); 
  }; 
//   checkCard = id => { 
//     const cards = this.get(); 
//     const card = cards?.find(card => card.id === id); 
//     return !!card; 
//   }; 
}
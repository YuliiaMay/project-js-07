import axios from 'axios';



axios.defaults.baseURL = 'https://api.nytimes.com/svc/';


export default class NewsApiService {    
    static #API_KEY = '1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ';
    static #POPULAR = 'mostpopular/v2/viewed/1';
    static #SEARCH = 'search/v2/articlesearch';
    static #CATEGORY = 'news/v3/content/';
    // static #DATA = '';


    constructor() {
        this.searchQuery = 'art';
        this.category = 'sport';
        this.data = '';
    }

    async searchPopularNews() {
        try {
            const response = await axios.get(`${this.#POPULAR}.json?api-key=${this.#API_KEY}`);
            return response;
        } catch (err) {
            console.log(err);
        } 
    }

    async searchNewsByQuery() {
        try {
            const response = await axios.get(`${this.#SEARCH}.json?q=${this.searchQuery}&api-key=${this.#API_KEY}`);
            return response;
        } catch (err) {
            console.log(err);
        } 
    }

    async searchNewsByCategory() {
        try {
            const response = await axios.get(`${this.#CATEGORY}${this.category}.json?api-key=${this.#API_KEY}`);
            return response;
        } catch (err) {
            console.log(err);
        } 
    }


    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
};

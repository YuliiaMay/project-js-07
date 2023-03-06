import axios from "axios";

export default class  SearchNewsApi {
    constructor() {
    this.baseUrl ="https://api.nytimes.com/svc/search/v2"
    this.apiKey = '1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ';
    this.query = "";
    //this.filter = "";
    this.page = 1;
    }
    async searchNews() {
        const requestUrl =`${this.baseUrl}/articlesearch.json?q=${this.query}&api-key=${this.apiKey}`
    return await axios.get(requestUrl)
    .then(response => {
        if (response.status !== 200 || response.data.response.docs.length === 0) {
            throw new Error (response.status)
        };
        
        this.nextPage () ;
        return response.data ;
    })
};
nextPage() {
    this.page +=1;
}

changeSearchQuery (value) {
    this.query = value;
};
}

//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

// const KEY = '1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ'




// const KEY = '1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ';



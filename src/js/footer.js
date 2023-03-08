const { default: axios } = require("axios");

const quoteText = document.querySelector('.footer__quote-text');
const quoteAutor = document.querySelector('.footer__quote-autor');
const QUOTE_URL = "https://api.quotable.io/random";

function loadQuote() {
    return axios
    .get(QUOTE_URL)
    .then(response => {
        if (response.status !== 200) {
            quoteText.textContent = "Не who makes no mistakes makes nothing";

        } else {
            quoteText.textContent = response.data.content;
            quoteAutor.textContent = response.data.author;
        }
    })
        .catch(error => console.log(error));
}

loadQuote();
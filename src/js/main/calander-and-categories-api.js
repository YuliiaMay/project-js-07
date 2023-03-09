import axios from 'axios';
const SEARCH_NEWS_URL =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const API_KEY = '1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ';

export default function getDateAndCategoryNews(
  selectedDate,
  selectedCategories
) {
  let SEARCH_BY_DATE = '';
  let SEARCH_BY_CATEGORIES = '';

  if (selectedCategories) {
    SEARCH_BY_CATEGORIES = `&fq=news_desk:(${selectedCategories})`;
  }
  SEARCH_BY_DATE =
    !selectedDate || selectedDate === null
      ? `?api-key=${API_KEY}`
      : `?facet_field=day_of_week&facet=true&begin_date=${selectedDate}&end_date=${selectedDate}&api-key=${API_KEY}`;

  return axios
    .get(`${SEARCH_NEWS_URL}${SEARCH_BY_DATE}${SEARCH_BY_CATEGORIES}`)
    .then(response => {
      if (response.status !== 200 || response.data.response.docs.length === 0) {
        throw new Error(response.status);
      }
      return response.data.response.docs;
    });
}

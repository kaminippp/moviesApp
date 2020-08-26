import { buildURL } from './helpers.js';

const SEARCH = 'search/movie';

const searchMovieURL = (query = '') => buildURL(SEARCH, { query })


const searchMovies = (query) =>
  fetch(searchMovieURL(query))
  .then(response => response.json())
  .then(({ results }) => results)
  .catch(error => error);

export {
  searchMovies
}


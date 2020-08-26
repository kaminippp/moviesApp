import { createAction } from 'redux-actions';
import {
  SEARCH_MOVIE,
  FAILED_SEARCH_MOVIE,
  SUCCESS_SEARCH_MOVIE
} from '../constants/actions.js';
export const searchMovies = createAction(SEARCH_MOVIE);
export const searchMoviesSuccess = createAction(SUCCESS_SEARCH_MOVIE);
export const searchMoviesFailed = createAction(FAILED_SEARCH_MOVIE);


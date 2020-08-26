import { handleActions } from 'redux-actions';
import {
  SEARCH_MOVIE,
  SUCCESS_SEARCH_MOVIE,
  FAILED_SEARCH_MOVIE
} from '../constants/actions.js';
import { fromJS, Map } from 'immutable';

const defaultState =  Map({
  isLoading: false,
  movies: [],
  error: false
});

const errorFetch = (state, { payload }) => state
    .set('error', payload.error)
    .set('isLoading', false)

const successFullFetch = (state, { payload }) => state
  .set('isLoading', false)
  .set('movies', payload.movies)

const fetching = (state) => state
  .set('isLoading', true)


const reducer = handleActions({
  SEARCH_MOVIE: fetching,
  SUCCESS_SEARCH_MOVIE: successFullFetch,
  FAILED_SEARCH_MOVIE: errorFetch

}, defaultState);


export default reducer;

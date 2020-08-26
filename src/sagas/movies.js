import { fork, take, put, call, takeEvery, all } from 'redux-saga/effects';
import {
  searchMoviesSuccess,
  searchMoviesFailed
} from '../actions/index.js';
import {
  SEARCH_MOVIE
} from '../constants/actions.js';
import { searchMovies } from '../services/api.js';

function *searchMovieSaga(action) {
  try {
    const movies = yield call(searchMovies, action.payload);
    yield put(searchMoviesSuccess({ movies }));
  } catch (error) {
    yield put(searchMoviesFailed({ error }))
  }
}

function *watchSearchMovie() {
  yield takeEvery(SEARCH_MOVIE, searchMovieSaga);
}

export default function *rootSaga() {
  yield all([
    watchSearchMovie()
  ]);
}



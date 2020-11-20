import {getAllFilmAPI} from '../apis/filmList'

export function getFilms(films) {
  return {
    type: 'GET_FILMS',
    films
  }
}

export function fetchFilms() {
  return dispatch => {
    return getAllFilmAPI()
      .then(films => {
        dispatch(getFilms(films))
        return null
      })
    }
  }
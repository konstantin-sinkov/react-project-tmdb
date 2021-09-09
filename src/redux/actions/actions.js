import {GET_FILMS, GET_GENRES, GET_FILM_DETAILS, DARK_MODE_TOGGLE} from "./action.types";

const getFilms = (payload) => {
    return {type: GET_FILMS, payload}
}

const getGenres = (payload) => {
    return {type: GET_GENRES, payload}
}

const getFilmDetails = (payload) => {
    return {type: GET_FILM_DETAILS, payload}
}

const toggleDarkMode = (payload) => {
    return {type: DARK_MODE_TOGGLE, payload}
}

export {getFilms, getGenres, getFilmDetails, toggleDarkMode}
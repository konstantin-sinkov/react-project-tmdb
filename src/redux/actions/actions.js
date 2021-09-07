import {GET_FILMS, GET_GENRES, GET_FILM_DETAILS, TURN_TO_DARK_MODE} from "./action.types";

const getFilms = (payload) => {
    return {type: GET_FILMS, payload}
}

const getGenres = (payload) => {
    return {type: GET_GENRES, payload}
}

const getFilmDetails = (payload) => {
    return {type: GET_FILM_DETAILS, payload}
}

export {getFilms, getGenres, getFilmDetails}
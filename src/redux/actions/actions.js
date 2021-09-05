import {GET_FILMS, GET_GENRES} from "./action.types";

const getFilms = (payload) => {
    return {type: GET_FILMS, payload}
}

const getGenres = (payload) => {
    return {type: GET_GENRES, payload}
}

export {getFilms, getGenres}
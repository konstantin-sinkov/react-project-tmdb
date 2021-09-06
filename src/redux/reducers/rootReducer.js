import {GET_FILMS, GET_GENRES, GET_FILM_DETAILS} from "../actions/action.types";

let initialState = ({films: [], genres: [], loadedFilm: {}});

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS:
            return {...state, films: action.payload}
        case GET_GENRES:
            return {...state, genres: action.payload}
        case GET_FILM_DETAILS:
            return {...state, loadedFilm: action.payload}
        // case "GET_FILM_DETAIL_INFO":
        //     return
        default:
            return state;
    }
}

export {rootReducer}
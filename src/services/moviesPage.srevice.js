import axios from "axios";
import {bearer_token} from "./bearer_token";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer ' + bearer_token
    }
});

const loadMovies = async () => await instance('/discover/movie');

const loadGenres = async () => await instance('/genre/movie/list');

const loadMovie = async (movieId) => await instance(`/movie/${movieId}`);

// const loadFilmImages = async (id) => await instance(`/movie/${id}/images`);

export {loadMovies, loadGenres, loadMovie};
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGI3NWU1MzQwZjhiN2UwMGNhNjk0YzlhZDgxMWJhNSIsInN1YiI6IjYxMmY1M2YwNmEzNDQ4MDA2MjEzMmVhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSpWwSix_cMaGeBglqUoOV_MXjwqzowkIUd9s0jzezg'
    }
});

const getMovies = async () => await instance('/discover/movie');

export {getMovies};
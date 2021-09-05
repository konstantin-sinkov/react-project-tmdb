import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {GET_FILMS, GET_GENRES} from "./redux/actions/action.types";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

let initialState = ({films: [], genres: []});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILMS:
            return {...state, films: action.payload}
        case GET_GENRES:
            return {...state, genres: action.payload}
        // case "GET_FILM_DETAIL_INFO":
        //     return
        default:
            return state;
    }
}


let store = createStore(reducer);
// store.dispatch(getMovies([]));
// store.dispatch(getGenres([]));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import './App.css';
import {useEffect} from "react";
import {loadGenres, loadMovies} from "./services/moviesPage.srevice";
import {useDispatch, useSelector} from "react-redux";
import {getFilms, getGenres} from "./redux/actions/actions";
import Header from "./components/header/Header";
import MoviesPage from "./components/movies_page/MoviesPage";

function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();

  useEffect( async () => {
      await loadMovies().then(value => dispatch(getFilms(value.data.results)));
      // console.log(state);
      await loadGenres().then(value => dispatch(getGenres(value.data.genres)));
      console.log(state);
  }, []);
  // console.log(state);



  return (
    <div>
        <Header />
        <MoviesPage props={state.films}/>
    </div>
  );
}

export default App;

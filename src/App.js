import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import {loadGenres, loadMovies} from "./services/moviesPage.srevice";
import {useDispatch, useSelector} from "react-redux";
import {getFilms, getGenres} from "./redux/actions/actions";


import Header from "./components/header/Header";
import MoviesPage from "./components/movies_page/MoviesPage";
import {Route} from "react-router";
import MovieDetailsPage from "./components/movie_details_page/MovieDetailsPage";
import {Button} from "react-bootstrap";


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

    //DarkMode
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    // const darkMode = false;
    useEffect(() => {
        console.log(`Is in dark mode? ${darkMode}`)
    },[darkMode]);

    localStorage.setItem("DARK_MODE", darkMode);
    const storeDarkMode = localStorage.getItem("DARK_MODE");
    // const [darkMode, setDarkMode] = useState(storeDarkMode);




  return (
      <Router>
          <div
              className={"App"}
              data-theme={darkMode? "dark" : "light"}
          >
              {/*<Button onClick={toggleDarkMode}>*/}
              {/*    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}*/}
              {/*</Button>*/}
              <Header />
              {/*<MoviesPage props={state.films}/>*/}
              <div className="wrapper">
                <Route exact path="/movies_page"  component={MoviesPage} />
                <Route exact path="/movies_page/:id"  component={MovieDetailsPage} />
              </div>
          </div>
      </Router>
  );
}

export default App;

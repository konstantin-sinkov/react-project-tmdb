import './App.css';
import {useEffect} from "react";
import {getMovies} from "./services/moviesPage.srevice";

function App() {
  useEffect(() => {
      getMovies().then(value => console.log(value.data.results));
  })

  return (
    <div>
      App
    </div>
  );
}

export default App;

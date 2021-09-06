import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useLocation, useParams} from "react-router";
import {loadMovie} from "../../services/moviesPage.srevice";
import {getFilmDetails} from "../../redux/actions/actions";

export default function MovieDetailsPage() {
  const {id} = useParams(); //get id from url
  let dispatch = useDispatch();

  useEffect(async () => {
    await loadMovie(id).then(value => console.log(value.data)/*dispatch(getFilmDetails(value.data.loadedFilm))*/)
  }, []);

  let state = useSelector(state => state.loadedFilm);
  const loadedFilm = {...state};

  return (
    <div>
      {JSON.stringify(loadedFilm)}
    </div>
  );
}
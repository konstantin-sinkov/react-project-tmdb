import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams} from "react-router";
import {loadMovie} from "../../services/moviesPage.srevice";
import {getFilmDetails} from "../../redux/actions/actions";

export default function MovieDetailsPage() {
  const {id} = useParams(); //get id from url
  let dispatch = useDispatch();
  let state = useSelector(state => state.loadedFilm);

  useEffect(async () => {
    await loadMovie(id).then(value => dispatch(getFilmDetails(value.data)));
  }, [id]);

  const loadedFilm = {...state};
  console.log(loadedFilm);

  return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={`https://image.tmdb.org/t/p/w300${loadedFilm.poster_path}`} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{loadedFilm.original_title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong>
                {
                  loadedFilm.genres ? loadedFilm.genres.map(el => ` ${el.name}, `) : 'no info'
                }
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {loadedFilm.release_date}
              </li>
              <li className="list-group-item">
                <strong>Popularity:</strong> {loadedFilm.popularity}
              </li>
              <li className="list-group-item">
                <strong>Vote average:</strong> {loadedFilm.vote_average}
              </li>
              <li className="list-group-item">
                <strong>Production company:</strong>
                {
                  loadedFilm.production_companies ? loadedFilm.production_companies.map(el => ` ${el.name}, `) : 'no info'

                }
              </li>
              <li className="list-group-item">
                <strong>Movie budget:</strong>
                {
                  ` ${loadedFilm.budget / 1000000} mln USD`
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-light my-5 text-black">
            <div className="col-md-12">
              <h3>About </h3>
              {loadedFilm.overview}
              <hr />
              <a
                  href={'https://www.imdb.com/title/' + loadedFilm.imdb_id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
              >
                View on IMDB
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
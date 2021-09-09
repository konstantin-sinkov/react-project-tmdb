import {Card, Button} from "react-bootstrap";
import PosterPreview from "../poster_preview/PosterPreview";
import GenreBadge from "../genre_badge/GenreBadge";
import StarRating from "../star_rating/StarRating";
import {Link} from "react-router-dom";
import './MovieListCard.css';

export default function MovieListCard({film}) {
  // console.log(film);
  return (
    <div className="col-md-3">
      <Card className={'movie_list_card'}>
        <PosterPreview
            filmId={film.id}
            posterPath={film.poster_path}/>
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <Card.Text className={"film_overview"}>
            {film.overview}
          </Card.Text>
          <GenreBadge filmGenreIds={film.genre_ids}/>
          <StarRating rating={film.vote_average} />
          <br/>
          <Link className={"btn btn-primary"} to={'/movies_page/' + film.id}>
            DETAILS>>>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
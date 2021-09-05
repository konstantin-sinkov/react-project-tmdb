import {Card, Button} from "react-bootstrap";
import PosterPreview from "../poster_preview/PosterPreview";
import GenreBadge from "../genre_badge/GenreBadge";
import StarRating from "../star_rating/StarRating";

export default function MovieListCard({film}) {
  return (
    <div className="col-md-3">
      <Card style={{ width: '18rem' }}>
        <PosterPreview
            filmId={film.id}
            posterPath={film.poster_path}/>
        <Card.Body>
          <Card.Title>{film.title}</Card.Title>
          <Card.Text>
            {film.overview}
          </Card.Text>
          <GenreBadge filmGenreIds={film.genre_ids}/>
          <StarRating
              value={film.vote_average}
              editing={false}/>
          <br/>
          <Button variant="primary">DETAILS>>></Button>
        </Card.Body>
      </Card>
    </div>
  );
}
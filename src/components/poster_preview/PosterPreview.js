import {Card} from "react-bootstrap";

export default function PosterPreview ({filmId, posterPath}) {

  return (
    <div>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${posterPath}`}/>
    </div>
  );
}
import MovieListCard from "../movie_list_card/MovieListCard";
import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";

export default function MoviesList() {
  let films = useSelector((state) => state.films);

  // debugger;
    return (
    <Container>
      <div className={'row'}>
      {
        films.map(el =>
            <MovieListCard
                film={el}
                key={el.id}
            />)
      }
      </div>
    </Container>
  );
}
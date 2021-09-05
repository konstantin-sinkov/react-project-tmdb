import MovieListCard from "../movie_list_card/MovieListCard";
import {useSelector} from "react-redux";

export default function MoviesList({films}) {
  // const movies = useSelector((state) => console.log(state));
  console.log(typeof(films));
  // debugger;
    return (
    <div className="row">
      {
        films.map(el =>
            <MovieListCard
                film={el}
                key={el.id}
            />)
      }
    </div>
  );
}
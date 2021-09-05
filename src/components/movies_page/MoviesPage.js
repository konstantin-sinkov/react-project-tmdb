import MoviesList from "../movies_list/MoviesList";

export default function MoviesPage({props}) {
  console.log(props);

    return (
    <div>
      <MoviesList films={props}/>
    </div>
  );
}
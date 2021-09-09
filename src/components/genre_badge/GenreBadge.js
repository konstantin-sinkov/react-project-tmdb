import {useSelector} from "react-redux";

export default function GenreBadge({filmGenreIds}) {
  let state = useSelector(state => state.genres);
  // console.log(state);
  let filmGenres = '';

  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < filmGenreIds.length; j++) {
      if (+state[i].id === filmGenreIds[j]) {
        filmGenres += state[i].name + ', ';
      }
    }
  }

  return (
    <div>
      <h5>
        {filmGenres}
      </h5>
    </div>

  );
}
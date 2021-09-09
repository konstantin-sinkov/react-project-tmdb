import {NavDropdown} from "react-bootstrap";
import {useSelector} from "react-redux";

export default function GenresList() {
  let state = useSelector(state => state.genres);
  const genres = [...state];
  // console.log(genres);

  return (
    <div>
        <NavDropdown title="Film genres" id="navbarScrollingDropdown" className={"navbar_dropdown"}>
            {
                genres.map(el =>
                    <NavDropdown.Item className={"text-black"} href="#" key={el.id}>
                        {el.name}
                    </NavDropdown.Item>
                )
            }
        </NavDropdown>
    </div>
  );
}
import UserInfo from "../user_info/UserInfo";
import GenresList from "../genres_list/GenresList";
import {Navbar} from "react-bootstrap";

export default function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>MovieBase</Navbar.Brand>
            <UserInfo/>
            <GenresList/>
        </Navbar>
    </div>
  );
}
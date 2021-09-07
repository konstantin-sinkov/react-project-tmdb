import UserInfo from "../user_info/UserInfo";
import GenresList from "../genres_list/GenresList";
import {Col, Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <div>
        <Navbar bg="light" variant="light">
            <Container>
                <Col sm={2}>
                    <Navbar.Brand>MovieBase</Navbar.Brand>
                </Col>
                <Col sm={7} className={"navbar_menu"}>
                    <Link className="navbar-brand text-black text-lg brand-text" to="/">
                        Home
                    </Link>
                    <Link className="navbar-brand text-black text-lg brand-text" to="/movies_page">
                        Movies Page
                    </Link>
                    <GenresList/>
                </Col>
                <Col sm={3}>
                    <UserInfo/>
                </Col>
            </Container>
        </Navbar>
    </div>
  );
}
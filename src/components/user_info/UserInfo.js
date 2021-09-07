import {Navbar} from "react-bootstrap";
import('./UserInfo.css');

export default function UserInfo() {
  return (
    <div>
        <Navbar.Text className={'user_block'}>
            Signed in as: <a href="#login">Tyler Durden</a>
            <img src={'https://www.meme-arsenal.com/memes/097e6b8302ab359110ad1daf9472f032.jpg'} alt={'User avatar'}/>
        </Navbar.Text>
    </div>
  );
}
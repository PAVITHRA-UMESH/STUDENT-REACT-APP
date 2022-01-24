import './Header.css';
import {Nav} from '../NavComponent/Nav';

export function Header(){
    return(
    <header className="myHeader">
        <Nav />
    </header>
    );
}
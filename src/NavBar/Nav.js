import './Nav.css';
import {NavLink} from 'react-router-dom';

export  let Nav=()=>{
    return(
        <nav>
           <ul className="myList">
                <li className="myTopic">STUDENT MANAGEMENT</li>
                <li><NavLink to="/home">HOME</NavLink></li>
                <li><NavLink to="/students/showall">SHOW STUDENTS</NavLink></li>
                <li><NavLink to="/students/add">ADD STUDENT</NavLink></li>
                <li><NavLink to="/students/search">SEARCH STUDENT</NavLink></li>
            </ul>
        </nav>
    );
} 


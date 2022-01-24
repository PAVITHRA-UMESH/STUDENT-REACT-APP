import { Show } from './Components/Show';
import AddStudent from './Components/AddStudent';
import DeleteStudent from './Components/DeleteStudent';
import { Nav } from './NavBar/Nav';
import { Footer } from './FooterComponent/Footer';
import Home from './HomeComponent/Home';
import { SearchStudent } from './Components/SearchStudent';
import UpdateStudent from './Components/UpdateStudent';
import {Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="myApp">
    <header>
    <Nav></Nav>
    </header>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/students/showall" element={<Show/>}></Route>
      <Route path="/students/delete/:id" element={<DeleteStudent/>}></Route>
      <Route path="/students/add" element={<AddStudent/>}></Route>
      <Route path="/students/edit/:id" element={<UpdateStudent/>}></Route>
      <Route path="/students/search" element={<SearchStudent/>}></Route>
    </Routes>
    <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
}

export default App;

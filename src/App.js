import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

function App() {
  return (
    <div>
          <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='About' element={<About></About>}></Route>
    </Routes>
    </div>

  );
}

export default App;

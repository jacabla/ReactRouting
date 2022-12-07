import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './Home';
import About from './About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='About' element={<About></About>}></Route>
    </Routes>
  );
}

export default App;

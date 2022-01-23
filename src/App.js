import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Home from './Components/Home';
import NextWeek from './Components/NextWeek';
import Header from './Components/Header';
import ThisWeek from './Components/ThisWeek';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      
      <Routes>
    <Route path='Home' element={<Home/>}/>
    <Route path='NextWeek' element={<NextWeek/>}/>
    <Route path='ThisWeek' element={<ThisWeek/>}/>





      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
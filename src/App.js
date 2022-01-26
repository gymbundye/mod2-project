import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Home from './Components/Home';
import NextWeek from './Components/NextWeek';
import Header from './Components/Header';
import ThisWeek from './Components/ThisWeek';
import YourThoughts from './Components/YourThoughts';
import  Search from './Components/Search';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      
      <Routes>
    <Route path='Home' element={<Home/>}/>
    <Route path='NextWeek' element={<NextWeek/>}/>
    <Route path='ThisWeek' element={<ThisWeek/>}/>
    <Route path='YourThoughts' element={<YourThoughts/>}/>
    <Route path='Search' element={<Search/>}/>



      </Routes>
      <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';

import Home from './Components/Home';
import NextWeek from './Components/NextWeek';
import Header from './Components/Header';
import ThisWeek from './Components/ThisWeek';
import YourThoughts from './Components/YourThoughts';
import  Search from './Components/Search';



import {ThemeContext} from "./ThemeContext"

import { useContext } from 'react/cjs/react.development';
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    <BrowserRouter>
    <div className="App">
      <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>

        
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
    </div>
    </BrowserRouter>
    
  );
}

export default App;

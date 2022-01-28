import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';

import Home from './Components/Home';
import NextWeek from './Components/NextWeek';
import Header from './Components/Header';
import ThisWeek from './Components/ThisWeek';
import YourThoughts from './Components/YourThoughts';
import  Search from './Components/Search';
import {GlobalProvider} from "./context/GlobalState";
function App() {
  
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;

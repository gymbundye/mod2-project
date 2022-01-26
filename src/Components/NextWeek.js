import React, {useState, useEffect} from "react";
import axios from "axios";
import Footer from "./Footer";
import "./movie.css"

    
     
    
    function NextWeek() {
      const [query, setQuery]= useState([])
        useEffect(()=> {
            axios.get("https://api.themoviedb.org/3/movie/tt0102690?api_key=0af5b4f32534825e575111d5029fb03e")
        .then((res) =>{
            console.log(res.data);
            setQuery(res.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
//     

    
    return(
      <div className="NextWeek">
           
      <h2 className="movie-title"><center>{query.title}</center></h2>
     <img className="imgDiv" src="/images/popcorn.jpg"></img>

      <p className="movie-tagline"><center>{query.tagline}</center></p>
      <p className="overview">{query.overview}</p>
      <iframe className="frame" width="50%" height="50%" src="https://www.youtube.com/embed/CsAChn35HSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {console.log(query)}
      
  </div>
        
        
        
    )
    
 }

export default NextWeek
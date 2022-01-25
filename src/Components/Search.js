
import React, {useState, useEffect} from "react";
import axios from "axios";
import Footer from "./Footer";

    
     
    
    function Search() {
      const [query, setQuery]= useState([])
        useEffect(()=> {
            axios.get("https://api.themoviedb.org/3/search/movie?api_key=<<0af5b4f32534825e575111d5029fb03e>>&language=en-US&page=1&include_adult=false")
        .then((res) =>{
            console.log(res.data);
            setQuery(res.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[]);
    
    return(
        <div className="searchPage">
            <div className="container">
                <div className="addSearch">
                    <input type='text' 
                    placeholder="Search Here!"

            />
                {query}</div>
            </div>
        </div>
        
    )
    
}
<Footer/>
export default Search
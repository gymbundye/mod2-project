
import React, {useState, useEffect} from "react";
import axios from "axios";
import Footer from "./Footer";

    
     
    
    function Search() {
      const [search, setSearch]= useState([])
      const [query, setQuery]= useState('')
//       function apiFetch(){
        
//         axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0af5b4f32534825e575111d5029fb03e&language=en-US&page=1&include_adult=false&query=${query}`)
//     .then((res) =>{
//         console.log(res.data);
//         setSearch(res.data);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });
// };
        function Searching(movie){
            setQuery(movie.target.value)
        }

        useEffect(()=> {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0af5b4f32534825e575111d5029fb03e&language=en-US&page=1&include_adult=false&query=${query}`)
        .then((res) =>{
            console.log(res.data.results);
            setSearch(res.data.results);
        })
        .catch((error)=>{
            console.log(error);
        });
    },[query]);
    


    

    
    return(
        <div className="Search">
            <form>
                <h2 className="searchbar">
                Searchbar
                </h2>
                <input type="text" placeholder="Search!" value={query} onChange={search=>(Searching(search))}></input>
            </form>
            {search.map((search, index)=>(
                <div key={index}>
                    <div clas>
                    <p>{search.title}</p>
                    <p>{search.tagline}</p>
                    <p>{search.overview}</p>
                    <img alt="Movie Posters" src={`https://image.tmdb.org/t/p/w500${search.poster_path}`}
/> 
                    {/* {console.log(search.results)} */}
                    </div>
                    </div>
            ))}

    </div>
    )
}

export default Search
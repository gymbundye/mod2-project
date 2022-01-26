import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import React from 'react';
import axios from "axios";




    function Random() {
        const [random, setRandom]= useState([])
          useEffect(()=> {
              axios.get("https://movie-quote-api.herokuapp.com/v1/movie")
          .then((res) =>{
              console.log(res.data);
              setRandom(res.data);
          })
          .catch((error)=>{
              console.log(error);
          });
      },[]);







  return( <div>

        {random.text}

  </div>)
}

export default Random;

import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import React from 'react';
import axios from "axios";




    function Random() {
        const [random, setRandom]= useState([])
          useEffect(()=> {
              axios.get("https://geek-jokes.sameerkumar.website/api?format=json")
          .then((res) =>{
              console.log(res.data);
              setRandom(res.data);
          })
          .catch((error)=>{
              console.log(error);
          });
      },[]);







  return(

    <div className="Random">
         ©️
 {random.joke}
      </div> 
    
    
)
}

export default Random;

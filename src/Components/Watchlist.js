import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Watchlist=()=>{
    const {watchlist}= useContext(GlobalContext);
    return(
        <div>
            {watchlist.map((search, index)=>(
                <h1 key={index}>{search.id}
                {console.log(watchlist)}
                </h1>
        
            ))}
        </div>
    )
}
export default Watchlist
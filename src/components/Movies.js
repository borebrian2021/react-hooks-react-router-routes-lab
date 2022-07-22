import React from "react";
import { movies } from "../data";
console.log(movies)
function Movies() {
  return (<div>
   <h1>Movies Page</h1> 
{
  movies.map((movie,index1)=>{
  //  { console.log(movie)}
   return(<div key={movie.title}>
   <h4 >{movie.title}</h4>
   <h4 >{movie.time}</h4>

   <ul>
   
   {movie.genres.map((genre,index2)=>{
    return(
   <li key={genre}>{movies[index1].genres[index2]}</li>)   })}
   </ul>
</div>)

  })
}

    </div>);
}

export default Movies;

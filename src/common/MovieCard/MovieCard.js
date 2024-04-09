import React from 'react';
import {Badge} from 'react-bootstrap'
import { useMovieGenreQuery } from '../../hooks/useMovies';
import './MovieCard.css'
const MovieCard = ({movie,key}) => {
  const {data:genreData}=useMovieGenreQuery()
  console.log(genreData,'ggg')
  const under18 =
  "https://st2.depositphotos.com/1431107/11748/v/450/depositphotos_117484062-stock-illustration-under-18-year-rubber-stamp.jpg";
const pg =
  "https://www.canr.msu.edu/contentAsset/image/6d081af8-8fa6-4927-bc64-c1ee0dca1b12/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80";

  const showGenre=(genreIdList)=>{
if(!genreData)return[]
const genreNameList =genreIdList.map((id)=>{
  const genreObj= genreData.find((genre)=>genre.id === id)
  return genreObj.name
})
return genreNameList
  }

  return (
    <div 
    style={{
      backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.backdrop_path}` +
          ")",
      
      }}
      className='movieCard'
    >
    <div className='overlay'>
      <h3 >{movie.title}</h3>
      {showGenre(movie.genre_ids).map((id)=><Badge bg='danger'>{id}</Badge>)}
      <div>
      <div>{movie.vote_average}</div>
      <div>{movie.popularity}</div>
      <div>{movie.adult?<img className='under18' src={under18}/>:<img className="under18" src={pg}/>}</div>
    </div>
    </div>

   
    </div>
  );
}

export default MovieCard

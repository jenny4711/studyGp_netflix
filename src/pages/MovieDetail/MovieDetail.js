import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MovieDetail.css'
const MovieDetail = ({route}) => {
  const location = useLocation();
  const { movie } = location.state;
  console.log(movie,'detail!')
  const popularity='https://cdn.iconscout.com/icon/premium/png-256-thumb/popularity-10303381-8498358.png'
  const imdb='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLefH-6MeAsnqYldQh6d49hb0aEBhaEcVX1A&s'
  return (
    <div className='MovieDetail'>
    <div className='MovieDetailLeft'>
      <img src={ `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`} />
    </div>
    <div className='MovieDetailRight'>
      <h1>{movie.title}</h1>
      <div className='info'>
       <p> <img width={40} src={popularity}/>{movie.popularity}</p>
       <p><img style={{marginLeft:'18px',marginRight:'8px'}} width={40} src={imdb}/>{movie.vote_average}</p>
       <p></p>
      </div>
      <span className='overview'>{movie.overview}</span>
    </div>
      
    </div>
  );
}

export default MovieDetail;

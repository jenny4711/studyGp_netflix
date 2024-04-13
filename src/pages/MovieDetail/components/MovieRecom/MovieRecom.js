import React from 'react';
import './MovieRecom.css'

const MovieRecom = ({data}) => {

  return (
    <div className='MovieRecom'>
    <div className='MovieRecomDiv'>
    <img src={ `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`} />
    </div>
       
    </div>
  );
}

export default MovieRecom;

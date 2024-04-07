import React from 'react';
import {Alert} from 'react-bootstrap'
import './Banner.css'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
const Banner = () => {
  const {data,isLoading,isError,error}=usePopularMoviesQuery();
  console.log(data?.results[0],'data')
  if(isLoading) {
  <h1>Loading...</h1>
}
if(isError) {
<Alert variant='danger'>{error.message}</Alert>
}
  return (
    <div style={{
      backgroundImage:"url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${data?.results[0].poster_path}`+")",
        backgroundRepeat:"no-repeat",
    }}
    className='banner'
    >
    <div className='text-white bannerTextArea'>
      <h1>{data?.results[0].title}</h1>
      <p>{data?.results[0].overview}</p>
    </div>
      
    </div>
  );
}

export default Banner;

import React from 'react';
import { useTopRateMovies,useUpcomingMovies } from '../../../../hooks/useMovies';
import {Alert} from 'react-bootstrap'
import Slider from '../../../../common/Slider/Slider'



const TopMoviesSlide = () => {
const {data,isLoading,isError,error}=useTopRateMovies()
if(isLoading) {
  return <h1>isLoading</h1>
}
if(isError) {
  return <Alert variant='danger'>{error.message}</Alert>
}

  return (
    <div style={{marginTop:'150px'}}>
      <h3>Top Rate Movies</h3>
      <Slider data={data} />
    </div>
  );
}

export default TopMoviesSlide;

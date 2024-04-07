import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import {Alert} from 'react-bootstrap'
import Slider from '../Slider/Slider';
const PopularMoviesSlide = () => {
  const {data,isLoading,isError,error}=usePopularMoviesQuery()
  if(isLoading) {
    return <h1>isLoading</h1>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <div>
      <h3>Popular Movies</h3>
      <Slider data={data}/>
    </div>
  );
}

export default PopularMoviesSlide;

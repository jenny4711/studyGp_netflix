import React from 'react';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import {Alert} from 'react-bootstrap'
import Slider from '../../../../common/Slider/Slider'
const PopularMoviesSlide = () => {
  const {data,isLoading,isError,error}=usePopularMoviesQuery()
  if(isLoading) {
    return <h1>isLoading</h1>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <div style={{marginTop:'150px'}}>
      <h3>Popular Movies</h3>
      <Slider data={data} />
    </div>
  );
}

export default PopularMoviesSlide;

import React from 'react';
import { useUpcomingMovies } from '../../../../hooks/useMovies';
import {Alert} from 'react-bootstrap'
import Slider from '../../../../common/Slider/Slider'

const UpcomingMovies = () => {
  const {data,isLoading,isError,error}=useUpcomingMovies()
  if(isLoading) {
    return <h1>isLoading</h1>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <div>
    <h3>Upcomming Movies</h3>
    <Slider data={data} />
  </div>
  );
}

export default UpcomingMovies;

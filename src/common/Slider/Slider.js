import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Carousel from "react-multi-carousel";
import { responsive } from '../../constants/responsive';
import "react-multi-carousel/lib/styles.css";
import './Slider.css'


const Slider = ({data}) => {
 console.log(data.results)
  return (
    <div style={{height:'400px'}}>
   
    <Carousel
infinite={true}
centerMode={true}
itemClass='movie-slider p-1'
containerClass='carousel-container'
responsive={responsive}


>

{data?.results.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
  
</Carousel>
</div>
  )
}

export default Slider;

import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Slider.css'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
   
  }
};

const Slider = ({data}) => {
 console.log(data.results)
  return (
    <Carousel
infinite={true}
centerMode={true}
itemClass='movie-slider p-1'
containerClass='carousel-container'
responsive={responsive}
>

{data?.results.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
  
</Carousel>
  )
}

export default Slider;

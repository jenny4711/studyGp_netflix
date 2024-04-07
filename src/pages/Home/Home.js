import React from 'react';
import Banner from './components/Banner/Banner';
import PopularMoviesSlide from './components/PopularMoviesSlide/PopularMoviesSlide';
//베너->popular 영화 들고와서 첫번째 아이템을 보여주지
//popular movie
//top rated movie
//upcomming mivie
const Home = () => {
  return (
    <div>
    <Banner/>
    <PopularMoviesSlide/>
    </div>
  );
}

export default Home;

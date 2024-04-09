import { useQuery } from '@tanstack/react-query';
import { fetchTopRateMovies,fetchUpcomingMovies,genreAPI } from '../utils/url';


export const useTopRateMovies =()=>{
  return useQuery({
    queryKey:['movie-topRate'],
    queryFn:fetchTopRateMovies,
    select:(result)=>result.data
  })
}

export const useUpcomingMovies =()=>{
  return useQuery({
    queryKey:['movie-upcoming'],
    queryFn:fetchUpcomingMovies,
    select:(result)=>result.data
  })

}

export const useMovieGenreQuery =()=>{
  return useQuery({
    queryKey:['movie-genre'],
    queryFn:genreAPI,
    select:(result)=>result.data.genres,
    staleTime:300000,
  })
}
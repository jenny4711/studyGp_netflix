import { useQuery } from '@tanstack/react-query';
import { fetchVideoMovie,fetchTopRateMovies,fetchUpcomingMovies,genreAPI ,fetchSearchMovie ,fetchReviewMovie,fetchRecomMovie } from '../utils/url';


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


export const useSearchMovieQuery =({page,keyword})=>{
  return useQuery({
    queryKey:['movie-search',page,keyword],
    queryFn:()=>fetchSearchMovie({page,keyword}),
    select:(result)=>result.data
    
  })
}

export const useReviewMovieQuery = (id)=>{
  return useQuery({
    queryKey:['movie-review',id],
    queryFn:()=>fetchReviewMovie(id),
    select:(result)=>result.data.results
  
  })
}

export const useRecomMovieQuery = (id)=>{
  return useQuery({
    queryKey:['movie-recom',id],
    queryFn:()=>fetchRecomMovie(id),
    select:(result)=>result.data.results
  
  })
}
export const useVideoMovieQuery = (id)=>{
  return useQuery({
    queryKey:['movie-video',id],
    queryFn:()=>fetchVideoMovie(id),
    select:(result)=>result.data.results[0]
  
  })
}
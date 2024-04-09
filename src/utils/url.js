import api from './api'
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchTopRateMovies=async()=>{
  return api.get(`/movie/top_rated?api_key=${API_KEY}`)
}

export const fetchUpcomingMovies=async()=>{
  return api.get(`/movie/upcoming?api_key=${API_KEY}`)
}

export const genreAPI=async()=>{
  return api.get(`/genre/movie/list?api_key=${API_KEY}`)
}
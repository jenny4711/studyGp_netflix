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



export const fetchSearchMovie=async({page,keyword})=>{
return keyword?api.get(`/search/movie?query=${keyword}&page=${page}&api_key=${API_KEY}`):api.get(`/movie/popular?page=${page}&api_key=${API_KEY}`)
}


export const fetchReviewMovie = async(id)=>{
  return api.get(`/movie/${id}/reviews?api_key=${API_KEY}&page=1`)
}

export const fetchRecomMovie = async(id)=>{
  return api.get(`/movie/${id}/recommendations?api_key=${API_KEY}`)
}

export const fetchVideoMovie = async(id)=>{
  return api.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
}

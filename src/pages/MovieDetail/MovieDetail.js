import React,{useState} from 'react';
import { useLocation , useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MovieDetail.css'
import {Container,Row,Col,Alert,Form,Button,Dropdown} from 'react-bootstrap'
import { useMovieGenreQuery } from '../../hooks/useMovies';
import {Badge} from 'react-bootstrap'
import { useReviewMovieQuery,useRecomMovieQuery,useVideoMovieQuery } from '../../hooks/useMovies';
import MovieRecom from './components/MovieRecom/MovieRecom';
import MovieReview from './components/MovieReview/MovieReview';
import Trailer from './components/Trailer/Trailer';
import { Link, animateScroll as scroll } from 'react-scroll';
const MovieDetail = () => {
  const location = useLocation();
  const { movie } = location.state;

 const [openRv,setOpenRv]=useState(false)
 const [openRm,setOpenRm]=useState(false)

const navigate=useNavigate()
  const popularity='https://cdn.iconscout.com/icon/premium/png-256-thumb/popularity-10303381-8498358.png'
  const imdb='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLefH-6MeAsnqYldQh6d49hb0aEBhaEcVX1A&s'

const {data:genreData}=useMovieGenreQuery()
const {data:review,isLoading:reviewLoadding,isError:reviewIsError,error:reviewError}=useReviewMovieQuery(movie?.id)
const {data:recom,isLoading:recomLoading,isError:recomIsError,error:recomError}=useRecomMovieQuery(movie?.id)
const {data:video}=useVideoMovieQuery(movie?.id)

const moveToDetail =(movie)=>{
  navigate(`/movies/${movie.id}`,{state:{movie}})
  setOpenRm(false)
  setOpenRv(false)
}

  const showGenre=(genreIdList)=>{
    if(!genreData)return[]
    const genreNameList =genreIdList?.map((id)=>{
      const genreObj= genreData?.find((genre)=>genre.id === id)
      return genreObj.name
    })
    return genreNameList
      }



  return (
    <>
    <div className='MovieDetail'>
    <div className='MovieDetailLeft'>
      <img src={ `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie?.poster_path}`} />
    </div>
    <div className='MovieDetailRight'>
      <h1>{movie.title}</h1>
      <div className='info'>
       <p> <img width={40} src={popularity}/>{movie.popularity}</p>
       <p><img style={{marginLeft:'18px',marginRight:'8px'}} width={40} src={imdb}/>{movie.vote_average}</p>
      </div>

      <span className='overview'>{movie.overview}</span>
      <div className='info2'>
      <p><Badge style={{padding:'10px 20px',fontSize:'15px',borderRadius:'50px'}} bg='danger' >Release Date</Badge> {movie.release_date}</p>
      <span className='genre'>
      <Badge style={{padding:'10px 20px',fontSize:'15px',borderRadius:'50px'}}  bg='danger' >Genre</Badge> 
      {showGenre(movie.genre_ids).map((id)=><Badge style={{color:'black',margin:'8px'}} bg='warning'>{id}</Badge>)}
      </span>
     <span>
     <div className="MovieDetail-trailer">
            {video?.key === "" ?<h5 style={{color:'gray'}}>No Trailer</h5>:<Trailer videoId={video?.key} />}
           
            
          </div>
     </span>
      </div>
    </div>
   
    </div>
    <div className='movieDetailBottom'></div>
    <div className='btns'>
    <button onClick={()=>setOpenRv(!openRv)} className='btn1'>{`REVIEW (${review?.length})`}</button>
   <button onClick={()=>setOpenRm(!openRm)} className='btn2'>{`RELATED MOVIES(${recom?.length})`}</button>
    </div>
   
    <div className={openRv?'review':'none'}>
   
    <div className='reviewDiv'>
    <h3 className='MovieReviewTitle'>Reviews</h3>
      {review?.map((data)=>(
        <MovieReview data={data}/>
      ))}
      </div>
    </div>

    <div className={openRm?'recom':'none'}>
    <div className='recomDiv'>
      <h3 className='MovieRecomTitle'>Related Movies</h3>
     <Container>
      <Col  lg={8} xs={12}>
        <Row>
        {
        recom?.map((data)=>(
          <Col onClick={()=>moveToDetail(data)} lg={4} xs={12}>
          
          <MovieRecom data={data} />
         
          </Col>
        ))
      }
        </Row>
      </Col>
     </Container>

     
    </div>
   
    </div>
      
    </>
  );
}

export default MovieDetail;

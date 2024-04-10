import React,{useState} from 'react';
import { useSearchMovieQuery } from '../../hooks/useMovies';
import { useSearchParams ,  useNavigate} from 'react-router-dom';
import {Container,Row,Col,Alert,Form,Button,Dropdown} from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import './Movies.css'
//경로 2가지
//nav bar  클릭->popularMovie 보여주기
// 키위드를 입력해온 경우->keyword 와 관련된 영화 보여주기
const Movies = () => {
  const [query,setQuery]=useSearchParams()
  const keyword = query.get("q");
  const [page,setPage]=useState(1)
  const {data,isLoading,isError,error}=useSearchMovieQuery({page,keyword})
const navigate=useNavigate()
  const handlePageChange = ({selected}) => {
   setPage(selected+1)
  };

//movie detail 넘어가는 함수
const moveToDetail = (movie) => {
navigate(`/movies/${movie.id}`,{state:{movie}})
}

 



  if(isLoading) {
    return <h1>isLoading</h1>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <Container>
     <Row>
     <Col lg={4} xs={12}>


     












     </Col>










     {/* //-------------------------------------------------- */}
      <Col lg={8} xs={12}>
      <Row>
        {data?.results.map((movie,index)=>
        <Col onClick={()=>moveToDetail(movie)}  key={index} lg={4} zs={12}>
        
          <MovieCard movie={movie}/>
          
        </Col>)}
        </Row>
        <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={data.total_pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        forcePage={page-1}
      />
      </Col>
     </Row>
    </Container>
  );
}

export default Movies;

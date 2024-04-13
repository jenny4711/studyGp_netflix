import React,{useState,useEffect} from 'react';
import { useSearchMovieQuery ,useMovieGenreQuery} from '../../hooks/useMovies';
import { useSearchParams ,  useNavigate} from 'react-router-dom';
import {Container,Row,Col,Alert,Form,Button,Dropdown} from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard';
import ReactSlider from 'react-slider'
import ReactPaginate from 'react-paginate';
import './Movies.css'
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';
//경로 2가지
//nav bar  클릭->popularMovie 보여주기
// 키위드를 입력해온 경우->keyword 와 관련된 영화 보여주기
const Movies = () => {
  const [query,setQuery]=useSearchParams()
  const keyword = query.get("q");
  const [page,setPage]=useState(1)
 const [show,setShow]=useState(false)
 const [genre, setGenre] = useState(false);
 const [value, setValue] = useState([]);
  const {data,isLoading,isError,error}=useSearchMovieQuery({page,keyword})
  const {data:popularMovies} = usePopularMoviesQuery()
  const {data:genreList}=useMovieGenreQuery()
  const [result,setResult]=useState([])
const navigate=useNavigate()

useEffect(() => {

  if (data && data.results) {
    setResult(data.results);
  }
}, [data]);

  const handlePageChange = ({selected}) => {
   setPage(selected+1)
  };

//movie detail 넘어가는 함수
const moveToDetail = (movie) => {
navigate(`/movies/${movie.id}`,{state:{movie}})
}
useEffect(()=>{
  setResult(data?.results)
},[data])
//----filter
const getPopularity = () => {
  const sortedResult = [...data?.results].sort(
    (a, b) => b.popularity - a.popularity
  );
  setResult(sortedResult)

};
 
const getTitle = () => {
  const sortedResult = [...data?.results].sort(function (a, b) {
    let nameA = a.title.toUpperCase();
    let nameB = b.title.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  setResult(sortedResult);
};

const getDate = () => {
  const sortedDateResult = [...data?.results].sort(function (a, b) {
    if (a.release_date < b.release_date) {
      return 1;
    }
    if (a.release_date > b.release_date) {
      return -1;
    }
    return 0;
  });

  setResult(sortedDateResult);
};

const handleGenre = (e) => {
  setGenre(!genre);
};

const handleRange = (e) => {
  
  setShow(!show);
};

const handleSliderChange = async () => {
    
  const filterObj = popularMovies?.results.filter(item => {
    
    const itemYear = new Date(item.release_date).getFullYear();
  
 
    return value[0] <= itemYear && itemYear <= value[1];
  });
  setResult(filterObj);

};

const genreBtn = async (e, newGenre) => {
  let filterObj = popularMovies?.results.filter((item) => {
    return item.genre_ids.includes(e);
  });
  setResult(filterObj);
};

//------------------------------------------------------------------

  if(isLoading) {
    return <h1>isLoading</h1>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <Container className='MoviesContainer'>
     <Row>
     <Col lg={4} xs={12}>
<Row>
<Dropdown className="Movies-drop1">
            <Dropdown.Toggle variant="dark" id="dropdown-basic drop1">
              Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="popularity" onClick={getPopularity}>
                popularity
              </Dropdown.Item>
              <Dropdown.Item eventKey="title" onClick={getTitle}>
                title
              </Dropdown.Item>
              <Dropdown.Item eventKey="release_data" onClick={getDate}>
                release_date
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="Movies-dropF">
            <Dropdown.Toggle variant="dark" id="dropdown-basic dropF">
              Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" onClick={handleRange}>
                Filter By Years
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={handleGenre}>
                Filter By Genre
              </Dropdown.Item>
            
            </Dropdown.Menu>
          </Dropdown>

          <div className={show ? "showS" : "hide"}>
            <div className='Movies-slider'>
            
           <ReactSlider
           className='horizontal-slider'
           thumbClassName='example-thumb'
           trackClassName='example-track'
           defaultValue={['1990','2023']}
           max={'2023'}
           min={'1990'}
           onChange={(value,index)=>setValue(value)}
           renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
           
           />
           <hr/>
           <h6 className='from'>From:{value[0]}</h6>
           <h6>To:{value[1]}</h6>
           <button className='yearClick' onClick={handleSliderChange}>Click</button>
           <button className='closeYear' onClick={()=>setShow(false)}>Close</button>
            </div>
          
          </div>



          <div className={genre ? "Movies-btn" : "hide"}>
            <Container>
              <Row xs="auto">
                {genreList?.map((item) => (
                  <Col  key={item.id}>
                    <button
                      className="genreBtn"
                      onClick={(e) => genreBtn(item.id)}
                    >
                      {item.name}
                    </button>
                    
                  </Col>
                ))}
               
              </Row>
              <button className='closeYear' onClick={()=>setGenre(false)}>Close</button>
            </Container>
          
          </div>


          
</Row>

     












     </Col>










     {/* //-------------------------------------------------- */}
      <Col  lg={8} xs={12}>
      <Row style={{marginBottom:'50px'}}>
        { result?.map((movie,index)=>
        <Col onClick={()=>moveToDetail(movie)}  key={index} lg={4} xs={12}>
        
          <MovieCard movie={movie}/>
          
        </Col>)}
        </Row>
        

       
        <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageClassName={result?.length>11?"page-item":'hide'}
        pageLinkClassName={result?.length>11?"page-link":'hide'}
        previousClassName={result?.length>11?"page-item":'hide'}
        previousLinkClassName={result?.length>11?"page-link":'hide'}
        nextClassName={result?.length>11?"page-item":'hide'}
        nextLinkClassName={result?.length>11?"page-link":'hide'}
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        pageCount={data.total_pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={result?.length>11?"pagination":'hide'}
        activeClassName="active"
        forcePage={page-1}
      
      />
      </Col>
     </Row>
    </Container>
  );
}

export default Movies;

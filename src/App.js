import logo from './logo.svg';
import './App.css';
import AppLayout from './layout/AppLayout';
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Movies from './pages/Movies/Movies'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import NotFound from './pages/NotFound/NotFound'
import 'bootstrap/dist/css/bootstrap.min.css';
// home page /
//영화 전체보여주는 페이지 (서치) /movie
//영화 디테일 /movie/:id

function App() {
  return (
    <Routes>
<Route path='/' element={<AppLayout/>}>
<Route index element={<Home/>}/>

<Route path="/movies" element={<Movies/>}>
<Route index element={<Movies/>}/>
<Route path=':id' element={<MovieDetail/>}/>
</Route>
<Route path="*" element={<NotFound/>}/>
</Route>
    </Routes>
  );
}

export default App;

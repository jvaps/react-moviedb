import './App.css';
import Movie from './movie/Movie';
import MovieDetail from './movie/movie-detail/MovieDetail';
import MovieList from './movie/movie-detail/MovieDetail';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
            <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="list" element={<MovieList />} />
        <Route path="details/:id" element={<MovieDetail />} />
      </Routes>

    </div>
  );
}

export default App;

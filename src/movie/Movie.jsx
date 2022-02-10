import { AuthContext } from "../providers/getMovies";
import { useContext, useState, useEffect } from "react";
import React from "react";
import MovieList from "./movie-list/MovieList";
import "./Movie.css";
import Pagination from "../components/pagination/Pagination";
import Menu from "../components/menu/Menu";
import Filter from "../components/filter/Filter";
const Movie = () => {
  const { getMovieList, getGenreList, getMovieByGenre } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [genres, setGenres] = useState([]);
  const [filterGenre, setFilterGenre] = useState(['']);
  const getMovies = (page) => {
    if (page) {
      getMovieList(page).then((data) => {
        setPage(page);
        setList(data);
      });
    } else
      getMovieList().then((data) => {
        setList(data);
      });
  };
  const getGenres = () => {
    getGenreList().then((data) => {
      return setGenres(data.genres);
    });
  };
  const getMovieGenre = (genre) => {
    getMovieByGenre(genre).then((data) => {
      setFilterGenre(data);
      setList(data)
    });
  };
  const goToPage = (e) => {
    setPage(e);
    getMovies(e);
  };

  useEffect(() => {
      getGenres()
    filterGenre.length > 0 ? getMovies(page) : getMovieGenre(filterGenre);

  }, [page]);

  return (
    <div className="movie">
      <Menu>
      <h2>Filtre por:</h2>
        <div className="filter">
          {genres.map((e) => (
        <Filter key={e.id} params={e.name} onClick={() => getMovieGenre(e.id)}>
            
        </Filter>
      ))}
        </div>
      </Menu>
      <div>
        <MovieList movieList={list}></MovieList>
      </div>
      <div className="pagination">
        {
          <Pagination
            nextPage={() => getMovies(page + 1)}
            previousPage={() => getMovies(page - 1)}
            selectPage={(e) => goToPage(e.target.value)}
            value={page}
          ></Pagination>
        }
      </div>
    </div>
  );
};

export default Movie;

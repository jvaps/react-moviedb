import { AuthContext } from "../../providers/getMovies";
import { useContext } from "react";
import React from "react";
import "./MovieList.css";
import { useNavigate } from "react-router-dom";

const MovieList = ({ movieList }) => {
  const { setMovieId } = useContext(AuthContext);
  const navigate = useNavigate();
  const clickMovie = (id) => {
    setMovieId(id);
    navigate(`details/${id}`);
  };
  return (
    <div className="movie-list">
      {movieList.map((e) => (
        <div key={e.id} onClick={() => clickMovie(e.id)}>
          <div className="title">{e.title}</div>
          <div className="image">
            <img src={e.image} alt={e.title}></img>
          </div>
          <div className="date">{e.date}</div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

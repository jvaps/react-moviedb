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
  function formatDate (input) {
  let datePart = input.match(/\d+/g),
  year = datePart[0].substring(2),
  month = datePart[1], day = datePart[2];
  return day+'/'+month+'/'+year;
}
  return (
    <div className="movie-list">
      {movieList.map((e) => (
        <div key={e.id} onClick={() => clickMovie(e.id)} className="movie-list-item">
            <img className="image"src={e.image} alt={e.title}></img>
          <p className="title">{e.title}</p>
          <p className="date">{formatDate(e.date)}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

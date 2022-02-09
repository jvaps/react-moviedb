import { AuthContext } from "../../providers/getMovies";
import { useContext, useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
const MovieDetail = () => {
  const { getMovieById, imageUrl } = useContext(AuthContext);
  const [movie, setMovie] = useState('');
  const {id} = useParams()
  const getMovieDetail = () => {
    getMovieById(id).then((data) => {
        console.log('movieId :>> ', id);
        console.log('data :>> ', data);
        console.log('movie :>> ', movie);
        setMovie(data)
    });
};
const { title, genre, poster_path, overview, vote_average, release_date } = movie
  useEffect(() => {
    getMovieDetail();
  }, []);
    return (
        <div className="movie-detail">
            <div>{title}</div>
            <div>{genre}</div>
            <div>{imageUrl + poster_path}</div>
            <div>{overview}</div>
            <div>{vote_average}</div>
            <div>{release_date}</div>
        </div>
     );
}
 
export default MovieDetail;
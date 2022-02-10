import { AuthContext } from "../../providers/getMovies";
import { useContext, useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
const MovieDetail = () => {
  const { getMovieById, imageUrl } = useContext(AuthContext);
  const [movie, setMovie] = useState('');
  const [genreList] = useState([])
  const {id} = useParams()
  const getMovieDetail = () => {
    getMovieById(id).then((data) => {
        data.genres.map((e) => {
          return genreList.push(e.name);
        })
        setMovie(data)
    });
};
console.log('genresList :>> ', genreList)
const { title, poster_path, overview, vote_average, release_date } = movie
  useEffect(() => {
    getMovieDetail();
    ;

  }, [genreList]);
    return (
        <div className="movie-detail">
            <h2>{title}</h2>
            <div>{release_date}</div>
            <div className="genres">
            {
              genreList.map((e) => (
                <div key={e}>{e}</div>
              ))
            }
            </div>
            <img src={imageUrl + poster_path}/>
            <div>
            <h5>Sinopse</h5>
            <p>{overview}</p>
            </div>
            <div>
              {vote_average}
              <p>Avaliação dos usuários</p>
            </div>
        </div>
     );
}
 
export default MovieDetail;
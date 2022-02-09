import React, { useState } from "react";
import axios from "axios";
export const AuthContext = React.createContext({});
export const AuthProvider = props => {
    const [movieId, setMovieId] = useState({})
    const api = '8b66a9a3f0880c4e81a67bfe76d5b740'
    const imageUrl = 'https://image.tmdb.org/t/p/w200'
    const axiosMoviePage = (page) => {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=pt-BR&page=${page}`,

        })
    }
    const axiosMovieId = (movieId) => {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api}&language=pt-BR`,

        })
    }    
    const axiosGenreList = () => {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=pt-BR`,

        })
    }    
    const axiosMovieGenre = (genre) => {
        return axios({
            method: "get",
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${api}&with_genres=${genre}&language=pt-BR`,

        })
    }


    const getMovieList = (page) => {
        return axiosMoviePage(page).then((response) => {
            return response.data.results.map((e) => {
                return {
                    id: e.id,
                    title: e.title,
                    date: e.release_date,
                    image: imageUrl + e.poster_path,
                    results: e.total_results
                }
            })
        })
    }

    const getMovieById = (movieId) => {
        return axiosMovieId(movieId).then((response) => {
            return response.data
        })

    }

    const getGenreList = () => {
        return axiosGenreList().then((response) => {
            return response.data
        })

    }

    const getMovieByGenre = (genre) => {
        return axiosMovieGenre(genre).then((response) => {
            return response.data.results.map((e) => {
                return {
                    id: e.id,
                    title: e.title,
                    date: e.release_date,
                    image: imageUrl + e.poster_path,
                    results: e.total_results
                }
            })
        })

    }

    return (
        <AuthContext.Provider value={{ movieId, setMovieId, getMovieList, getMovieById, imageUrl, getGenreList, getMovieByGenre }}>
            {props.children}
        </AuthContext.Provider>
    )
}


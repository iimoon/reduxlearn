import React, { useEffect } from "react";
import MovieLisiting from "../Movie-Listing/MovieListing"
import movieApi from "../../common/api/MovieApi"
import "./Home.scss";
import {APIKey} from "../../common/api/MovieApiKey"
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {

  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(()=>{
    const fetchMovies = async () =>{
      const response = await movieApi
      .get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      )
      .catch((err)=>{
        console.log("Error:",err)
      });
      dispatch(addMovies(response.data));
    }
    fetchMovies();
  },[]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieLisiting/> 
    </div>
  );
};

export default Home;

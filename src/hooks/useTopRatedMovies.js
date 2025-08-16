import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

import React, { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
        API_OPTIONS
      );

      const json = await data.json();
      dispatch(addTopRatedMovies(json.results)); 

      
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, [dispatch]); 
};

export default useTopRatedMovies;

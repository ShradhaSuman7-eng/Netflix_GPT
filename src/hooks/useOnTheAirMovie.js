import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOnAirMovies } from "../utils/moviesSlice";

const useOnTheAirMovie = () => {
  const dispatch = useDispatch();

  const getOnAirMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      

      dispatch(addOnAirMovies(json.results));
    } catch (error) {
      console.error("Error fetching On The Air movies:", error);
    }
  };

  useEffect(() => {
    getOnAirMovies();
  }, []);
};

export default useOnTheAirMovie;

import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAiringToday } from "../utils/moviesSlice";

// ✅ Custom hook


const useAiringTodayMovie = () => {
  const dispatch = useDispatch();

  const getAiringTodayData = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
        API_OPTIONS 
      );
      const json = await data.json();
      dispatch(addAiringToday(json.results));
    } catch (error) {
      console.error("Error fetching airing today data:", error);
    }
  };

  useEffect(() => {
    getAiringTodayData();
    
  }, []);
};

export default useAiringTodayMovie;

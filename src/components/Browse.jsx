import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useOnTheAirMovie from "../hooks/useOnTheAirMovie";
import useAiringTodayMovie from "../hooks/useAiringMovies";

const Browse = () => {

  useNowPlayingMovies(); 
  usePopularMovies();
  useTopRatedMovies();
  useOnTheAirMovie();
  useAiringTodayMovie();
  return (
    <div className=" w-screen h-14">
      <Header />
      <MainContainer/>
      <SecondaryContainer/>



     {/* 
     
     MainContainer
        Background Video
        Background Title
     SecondryContainer
         MovieList * n
            -cards * n
     */}
    </div>
  );
};

export default Browse;

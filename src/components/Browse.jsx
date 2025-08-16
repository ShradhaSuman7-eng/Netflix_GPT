import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayingMovies(); 
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

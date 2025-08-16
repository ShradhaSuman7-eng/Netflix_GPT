import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-6">
        <h1 className="text-3xl py-6 text-white  font-bold">{title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {movies && movies.length > 0 ? (
              movies.map((currMovie) => (
                <MovieCard
                  key={currMovie.id} 
                  posterPath={currMovie.poster_path}
                />
              ))
            ) : (
              <p>No movies available</p>
            )}
          </div>
        </div>
      </div>
  );
};

export default MovieList;

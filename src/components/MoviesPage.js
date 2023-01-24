import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {
  return (
    <div>
      <MoviesList movies={movies} />
      <Route path="/movies/:id" render={(props) => <MovieShow {...props} movies={movies} />} />
    </div>
  );
}

export default MoviesPage;

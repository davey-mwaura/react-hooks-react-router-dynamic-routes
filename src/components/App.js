import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";
import MovieShow from "./MovieShow";

function App() {
  const [movies] = useState({
    1: { id: 1, title: "A River Runs Through It" },
    2: { id: 2, title: "Se7en" },
    3: { id: 3, title: "Inception" },
  });

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
        <Route path="/movies">
          <MoviesPage movies={movies} />
          <Route path="/movies/:id" render={(props) => <MovieShow {...props} movies={movies} />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

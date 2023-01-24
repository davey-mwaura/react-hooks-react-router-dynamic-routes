import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  let { id } = useParams();
  const movie = movies[id];

  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  );
}

export default MovieShow;

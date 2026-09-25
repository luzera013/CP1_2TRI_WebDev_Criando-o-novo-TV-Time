import { useState } from "react";
import MovieCard from "../components/MovieCard";
import type { Movie } from "../types/movie";

function MyList() {
  const [movies] = useState<Movie[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("myMovies") || "[]");
    } catch {
      return [];
    }
  });

  return (
    <div>
      <h1>Minha Lista</h1>

      {movies.length === 0 ? (
        <p>Você ainda não adicionou nenhum filme à sua lista.</p>
      ) : (
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
              <p>Status: {movie.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyList;
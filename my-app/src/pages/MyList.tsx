import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function MyList() {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const savedMovies = JSON.parse(
      localStorage.getItem("myMovies") || "[]"
    );

    setMovies(savedMovies);
  }, []);

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
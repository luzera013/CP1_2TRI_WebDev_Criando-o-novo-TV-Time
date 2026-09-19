import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPopularMovies } from "../services/tmdb";
import MovieCard from "../components/MovieCard";

function Home() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const results = await getPopularMovies();
      setMovies(results);
    }

    loadMovies();
  }, []);

  return (
    <div>
    <h1>Encontre seu próximo filme</h1>

<div>
    <input
    type="text"
    placeholder="Pesquisar filmes e séries..."
    value={search}
    onChange={(event) => setSearch(event.target.value)}
    />

    <button onClick={() => navigate(`/search?query=${search}`)}>
    Pesquisar
  </button>
</div>

    <h2>🔥 Filmes populares</h2>    

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
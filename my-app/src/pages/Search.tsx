import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/tmdb";
import MovieCard from "../components/MovieCard";
import { Search as SearchIcon } from "lucide-react";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
  if (query) {
    setSearch(query);

    searchMovies(query).then((results) => {
      setMovies(results);
    });
  }
}, [query]);

  async function handleSearch() {
    if (!search) return;

    const results = await searchMovies(search);
    setMovies(results);
  }

  return (
    <div>
      <h1>Explorar</h1>

      <input
        type="text"
        placeholder="Digite um filme..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <button onClick={handleSearch}>
    <SearchIcon size={18} />
  Pesquisar
</button>

{movies.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
))}
    </div>
  );
}

export default Search;
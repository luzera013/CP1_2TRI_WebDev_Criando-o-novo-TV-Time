import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/tmdb";
import type { Movie } from "../types/movie";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadMovie() {
      if (!id) return;

      const data = await getMovieDetails(id);
      if (mounted) setMovie(data);
    }

    loadMovie();

    return () => {
      mounted = false;
    };
  }, [id]);

  if (!movie) {
    return <p>Carregando...</p>;
  }

  function handleSave() {
    if (!movie) return;

    const savedMovies: Movie[] = JSON.parse(
      localStorage.getItem("myMovies") || "[]"
    );

    const alreadySaved = savedMovies.some(
      (savedMovie) => savedMovie.id === movie.id
    );

    if (!alreadySaved) {
      const toSave: Movie = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path ?? null,
        overview: movie.overview ?? "",
        vote_average: movie.vote_average ?? 0,
        status: "Quero assistir",
      };

      savedMovies.push(toSave);

      localStorage.setItem("myMovies", JSON.stringify(savedMovies));
    }

    setSaved(true);
  }

  return (
    <div className="details">
      <h1>{movie.title}</h1>

      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      )}

      <p>{movie.overview}</p>

      <p>Nota: {movie.vote_average}</p>

      <button onClick={handleSave}>
        {saved ? "Adicionado à lista!" : "Quero assistir"}
      </button>

    </div>
  );
}

export default Details;
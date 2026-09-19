import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/tmdb";

function Details() {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>(null);
    const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function loadMovie() {
      if (!id) return;

      const data = await getMovieDetails(id);
      setMovie(data);
    }

    loadMovie();
  }, [id]);

  if (!movie) {
    return <p>Carregando...</p>;
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

<button
  onClick={() => {
    const savedMovies = JSON.parse(
      localStorage.getItem("myMovies") || "[]"
    );

const alreadySaved = savedMovies.some(
  (savedMovie: any) => savedMovie.id === movie.id
);

if (!alreadySaved) {
savedMovies.push({
  ...movie,
  status: "Quero assistir",
});

  localStorage.setItem("myMovies", JSON.stringify(savedMovies));
}

setSaved(true);

  }}
>
  {saved ? "Adicionado à lista!" : "Quero assistir"}
</button>

    </div>
  );
}

export default Details;
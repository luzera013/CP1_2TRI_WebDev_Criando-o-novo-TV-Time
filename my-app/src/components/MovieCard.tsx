import { Link } from "react-router-dom";

type MovieCardProps = {
  movie: any;
};

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="movie-card">
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
      )}

      <h2>{movie.title}</h2>

      <Link to={`/details/${movie.id}`}>
        Ver detalhes
      </Link>
    </div>
  );
}

export default MovieCard;
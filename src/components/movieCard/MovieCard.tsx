import { Movie } from "../../interfaces/movie-interface";
import imgPrueba from "../../assets/img-muestra.jpg";
import "./MovieCard.css";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className="card-container grid">
      <div className="card">
        <div className="card-img">
          <img src={movie.Poster !== "N/A" ? movie.Poster : imgPrueba} alt="" />
        </div>
        <div className="card-info">
          <h4>{movie.Title}</h4>
          <p>
            <span>Año:</span> {movie.Year}
          </p>
          <p>
            <span>Genero:</span> {movie.Genre}
          </p>
        </div>
      </div>
    </div>
  );
};

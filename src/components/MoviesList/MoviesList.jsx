import { Link } from "react-router-dom";
import css from "./MoviesList.module.css";

function MoviesList({ movies, location }) {
  const defaultImg = "../../images/noFound/noImage.png";
  return (
    <div>
      <ul className={css.moviesList}>
        {movies !== null &&
          Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <li className={css.moviesBox} key={movie.id}>
                <Link
                  className={css.moviesBoxLink}
                  state={location}
                  to={`/movies/${movie.id}`}
                >
                  <img
                    className={css.movieListPoster}
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                        : defaultImg
                    }
                    alt={movie.title}
                  />
                  <h3 className={css.movieListTitle}>{movie.title}</h3>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MoviesList;

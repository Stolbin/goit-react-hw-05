import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import searchMovies from "../../api/moviesAPI";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(false);

        const { data } = await searchMovies(`movie/${movieId}/credits?`);

        setCast(data.cast);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [movieId]);

  const defaultNoPhotoImg = "/src/image/noAvatar.jpg";

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      <ul className={css.castList}>
        {cast &&
          Array.isArray(cast) &&
          cast.map((actor) => {
            return (
              <li className={css.castCard} key={actor.id}>
                <img
                  className={css.castPhoto}
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : defaultNoPhotoImg
                  }
                  alt={actor.title}
                />
                <p className={css.castName}>{actor.name}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MovieCast;

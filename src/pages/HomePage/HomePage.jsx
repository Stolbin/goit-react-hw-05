import MoviesList from "../../components/MoviesList/MoviesList";
import searchMovies from "../../api/moviesAPI";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(false);
        setMovies([]);
        const { data } = await searchMovies(`/trending/movie/day`);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MoviesList location={location} movies={movies} />
      {error && <ErrorMessage />}
    </>
  );
};

export default HomePage;

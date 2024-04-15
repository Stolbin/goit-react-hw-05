import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import searchMovies from "../../api/moviesAPI";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(false);

        const { data } = await searchMovies(`movie/${movieId}/reviews`);

        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}

      <ul>
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => {
            return (
              <li key={review.id}>
                <p className={css.reviewTitle}>{review.author}</p>
                <p className={css.noReview}>{review.content}</p>
              </li>
            );
          })
        ) : (
          <p className={css.noReview}>Oooops, no reviews for this movie</p>
        )}
      </ul>
    </>
  );
};

export default MovieReviews;

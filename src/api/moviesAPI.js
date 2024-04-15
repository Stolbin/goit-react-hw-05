import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export default async function searchMovies(endpoint) {
  const response = await axios.get(endpoint, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzM3MWIwMmM3YWI1MjcwOWRlYWFjNDgwOTg3MTQ5MCIsInN1YiI6IjY0MWFmNzRiZjlhYTQ3MDBjZGU2Nzg3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._7ndCgD2ORd0zkHkTtSaNYW76GlaFNNyN1U72orYdSw",
    },
  });
  return response;
}

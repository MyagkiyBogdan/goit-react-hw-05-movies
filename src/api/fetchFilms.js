const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '?api_key=2ddded2d287329b6efbf335a6f8f3bd4';
// 'https://api.themoviedb.org/3/movie/550?api_key=2ddded2d287329b6efbf335a6f8f3bd4';

async function fetchFilms(url) {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('404 Not found'));
}

export function fetchTrending() {
  return fetchFilms(`${BASE_URL}/trending/all/day${KEY}`);
}

export function searchMovies(movie) {
  return fetchFilms(`${BASE_URL}/search/movie${KEY}&query=${movie}`);
}

export function getOneMovieDetails(movieId) {
  return fetchFilms(`${BASE_URL}/movie/${movieId}${KEY}`);
}

export function getOneMovieActors() {
  return fetchFilms(`${BASE_URL}/movies/get-movie-credits`);
}

export function getOneMovieReviewes() {
  return fetchFilms(`${BASE_URL}/movies/get-movie-reviews`);
}

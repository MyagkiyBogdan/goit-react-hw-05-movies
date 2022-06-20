import { Outlet, useParams } from 'react-router-dom';
import styles from './MovieDetailsPage.module.css';
import { getOneMovieDetails } from 'api/fetchFilms';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getOneMovieDetails(movieId)
      .then(movie => setMovie(movie))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <h1>MovieDetailsPage</h1>
      {movie && (
        <>
          <div>
            <h2>
              {movie.original_name || movie.original_title} (
              {movie.release_date.slice(0, 4)})
            </h2>
            <p>User score: {movie.vote_average}</p>
            <p>Overview: {movie.overview}</p>
            <p>Genres: {movie.genres.map(movie => movie.name).join(', ')}</p>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              width="300"
              alt={movie.original_name || movie.original_title}
            />
          </div>

          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to={`cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`reviews`}>Reviews</NavLink>
              </li>
            </ul>
            <div>Content will be here</div>
            <Outlet />
          </div>
        </>
      )}
      {error && <h2>Sorry! Backend problem, {error.message}</h2>}
    </>
  );
}

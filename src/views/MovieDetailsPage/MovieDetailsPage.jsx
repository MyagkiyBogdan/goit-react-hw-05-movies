import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import { MovieWrapper, InfoWrapper, BoldText } from './MovieDetailsPage.styled';
import { getOneMovieDetails } from 'api/fetchFilms';
import { useEffect, useState, useRef, Suspense } from 'react';
import { NavLink } from 'react-router-dom';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
  const backFrom = useRef(backLinkHref);

  useEffect(() => {
    getOneMovieDetails(movieId)
      .then(movie => setMovie(movie))
      .catch(error => setError(error));
  }, [movieId]);

  return (
    <>
      <h1>MovieDetailsPage</h1>
      <Link to={backLinkHref}>Back</Link>
      {movie && (
        <>
          <MovieWrapper>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              width="300"
              alt={movie.original_name || movie.original_title}
            />
            <InfoWrapper>
              <h2>
                {movie.original_name || movie.original_title} (
                {movie.release_date.slice(0, 4)})
              </h2>
              <p>User score: {movie.vote_average}</p>
              <BoldText>Overview:</BoldText>
              <p> {movie.overview}</p>
              <BoldText>Genres</BoldText>
              <p> {movie.genres.map(movie => movie.name).join(', ')}</p>
            </InfoWrapper>
          </MovieWrapper>

          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to="cast" state={{ from: backFrom.current }}>
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink to="reviews" state={{ from: backFrom.current }}>
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
      {error && (
        <h2>Sorry! Backend server response problem, {error.message}</h2>
      )}
    </>
  );
}

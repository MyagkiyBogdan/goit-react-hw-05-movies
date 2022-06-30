import * as filmsAPI from '../../api/fetchFilms';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageTitle } from './HomePage.styled';

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    filmsAPI.fetchTrending().then(result => {
      return setFilms(result.results);
    });
  }, []);

  return (
    <>
      <PageTitle>HomePage</PageTitle>
      <ul>
        {films &&
          films.map(film => {
            return (
              <li key={film.id}>
                <Link to={`movies/${film.id}`} state={{ from: location }}>
                  {film.original_name || film.original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

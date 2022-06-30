import { useState, useEffect } from 'react';
import * as filmsAPI from '../../api/fetchFilms';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { PageTitle, Button, Input } from './MoviesPage.styled';

export default function MoviesPage() {
  const [films, setFilms] = useState(null);

  const { pathname } = useLocation();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    filmsAPI.searchMovies(query).then(response => {
      return setFilms(response.results);
    });
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: e.target.searchInput.value });
    // navigate(`${pathname}?query=${e.target.searchInput.value}`);
  };

  return (
    <>
      <PageTitle>MoviesPage</PageTitle>
      <form onSubmit={handleSubmit}>
        <Input name="searchInput" />
        <Button type="submit">Search</Button>
      </form>
      {films &&
        films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`${pathname}/${film.id}`} state={{ from: location }}>
                {film.original_name || film.original_title}
              </Link>
            </li>
          );
        })}
    </>
  );
}

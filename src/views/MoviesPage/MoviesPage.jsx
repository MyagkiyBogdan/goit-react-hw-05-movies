import styles from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import * as filmsAPI from '../../api/fetchFilms';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function MoviesPage() {
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!search) {
      return;
    }
    filmsAPI.searchMovies(search).then(response => {
      return setFilms(response.results);
    });
  }, [search]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(e.target.searchInput.value);
    navigate(`${pathname}?query=${e.target.searchInput.value}`);
  };

  return (
    <>
      <h1>MoviesPage</h1>
      <form onSubmit={handleSubmit}>
        <input name="searchInput" />
        <button type="submit">Search</button>
      </form>
      {films &&
        films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`${pathname}/${film.id}`}>
                {film.original_name || film.original_title}
              </Link>
            </li>
          );
        })}
    </>
  );
}

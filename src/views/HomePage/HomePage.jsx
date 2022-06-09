import styles from './HomePage.module.css';
import * as filmsAPI from '../../api/fetchFilms';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    filmsAPI.fetchTrending().then(result => {
      console.log(result.results);
      return setFilms(result.results);
    });
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <ul>
        {films &&
          films.map(film => {
            return (
              <li key={film.id}>
                <Link to={`movies/${film.id}`}>
                  {film.original_name || film.original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}

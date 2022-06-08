import styles from './HomePage.module.css';
import * as filmsAPI from '../../api/fetchFilms';
import { useState, useEffect } from 'react';

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
              <li key={film.id}>{film.original_name || film.original_title}</li>
            );
          })}
      </ul>
    </>
  );
}

import { useEffect, useState } from 'react';
import { getOneMovieActors } from '../../api/fetchFilms';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getOneMovieActors(movieId)
      .then(actors => setCast(actors.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <h3>Cast</h3>

      <ul>
        {cast &&
          (cast.length === 0 ? (
            <h4>We have no information about the cast now. Come later!</h4>
          ) : (
            cast.map(({ id, name, character, profile_path }) => {
              return (
                <li key={id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    width="100"
                    alt={name}
                  />
                  <h4>{character}</h4>
                  <p>{name}</p>
                </li>
              );
            })
          ))}
      </ul>
    </>
  );
}

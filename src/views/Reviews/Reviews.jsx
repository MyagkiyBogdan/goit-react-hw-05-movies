import { useEffect, useState } from 'react';

import { getOneMovieReviewes } from '../../api/fetchFilms';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getOneMovieReviewes(movieId)
      .then(reviews => setReviews(reviews.results))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>

      <ul>
        {reviews &&
          (reviews.length === 0 ? (
            <h4>We dont have any reviews for this movie now. Come later!</h4>
          ) : (
            reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <h4>{author}</h4>
                  <p>{content}</p>
                </li>
              );
            })
          ))}
      </ul>
    </>
  );
}

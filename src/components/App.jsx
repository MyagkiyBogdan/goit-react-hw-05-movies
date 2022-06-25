import { Route, Routes } from 'react-router-dom';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import Navigation from './Navigation';
import Cast from 'views/Cast';
import Reviews from 'views/Reviews';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
        {/* * === Redirect react-router-dom 5 */}
      </Routes>

      {/* Пробовал сделать как в конспекте, индесные маршруты, но почему то ничего не работает */}

      {/* <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes> */}
    </>
  );
};

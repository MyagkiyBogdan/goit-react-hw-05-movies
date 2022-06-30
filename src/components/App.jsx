import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('../views/HomePage'));
const Navigation = lazy(() => import('./Navigation'));
const MoviesPage = lazy(() => import('../views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../views/MovieDetailsPage'));
const Cast = lazy(() => import('views/Cast'));
const Reviews = lazy(() => import('views/Reviews'));

// Такой способ содания импортов не работает. В чем ошибка?
//  Uncaught Error: Cannot find module './Navigation'

// const createAsyncComponent = path => lazy(() => import(path));
// const Navigation = createAsyncComponent('./Navigation');
// const MoviesPage = createAsyncComponent('../views/MoviesPage');
// const MovieDetailsPage = createAsyncComponent('../views/MovieDetailsPage');
// const Cast = createAsyncComponent('views/Cast');
// const Reviews = createAsyncComponent('views/Reviews');

export const App = () => {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>

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
    </div>
  );
};

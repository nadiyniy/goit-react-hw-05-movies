import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { lazy } from 'react';

const Movie = lazy(() => import('./movie/Movie'));
const Home = lazy(() => import('page/Home'));
const Movies = lazy(() => import('page/Movies'));
const NotFound = lazy(() => import('page/NotFound'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        x
        <Route path="movies" element={<Movies />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

import Movies from 'page/Movies';
import Home from 'page/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'page/NotFound';
import { Layout } from './layout/Layout';
import Movie from './movie/Movie';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';

export const App = () => {
  return (
    <Routes
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="movies/:id" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetalis/MovieDatails'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


const App = () => {
  return (
    <BrowserRouter basename='/goit-react-hw-05-movies/'>
    <Routes>
    <Route path="/" element={<SharedLayout />}>
        <Route path='/' index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path='*' element={<PageNotFound/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
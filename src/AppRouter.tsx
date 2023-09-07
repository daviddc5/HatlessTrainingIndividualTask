import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import MovieDetails from './components/MovieDetails';
import NavBar from './components/NavBar';
import { FavoritesProvider } from './components/FavoritesContext';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </FavoritesProvider>
    </Router>
  );
};

export default AppRouter;

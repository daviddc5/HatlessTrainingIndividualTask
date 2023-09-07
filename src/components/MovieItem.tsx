import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from './Home';
import { useFavorites } from './FavoritesContext';

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const { addToFavorites } = useFavorites();

  const handleAddToFavorites = () => {
    addToFavorites(movie);
  };

  return (
    <div>
      <Link to={`/movie/${movie.imdbID}`}>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
      </Link>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default MovieItem;

import React from 'react';
import { useFavorites } from './FavoritesContext';


const Favorites: React.FC = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  const handleRemove = (imdbID: string) => {
    removeFromFavorites(imdbID);
  };

  return (
    <div className="favorites-container"> {/* Apply Bootstrap container class */}
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="row"> {/* Apply Bootstrap row class */}
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="col-sm-6 col-md-4 col-lg-3"> {/* Apply Bootstrap column classes */}
              <div className="movie-card">
                <img src={movie.Poster} alt={movie.Title} className="movie-card-img" /> {/* Apply custom CSS class for responsive image */}
                <div className="movie-card-content">
                  <h2 className="movie-card-title">{movie.Title}</h2>
                  <button onClick={() => handleRemove(movie.imdbID)} className="btn btn-danger">Remove from Favorites</button> {/* Apply Bootstrap button class */}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

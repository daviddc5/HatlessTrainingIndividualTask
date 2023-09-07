import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Movie } from './Home';

interface FavoritesContextProps {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (imdbID: string) => void;
  saveFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  // Load favorites from localStorage when component is mounted
  useEffect(() => {
    const loadedFavorites = localStorage.getItem('favorites');
    if (loadedFavorites) {
      const parsedFavorites = JSON.parse(loadedFavorites);
      setFavorites(parsedFavorites);
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (imdbID: string) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== imdbID));
  };

  const saveFavorites = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, saveFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

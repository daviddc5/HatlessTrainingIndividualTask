import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

import 'bootstrap/dist/css/bootstrap.css';

export interface Movie {
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
  imdbID: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const handleSearchResults = (query: string, results: any[], error: Error | null) => {
    if (error) {
      console.error('An error occurred during the search:', error);
    } else {
      console.log(`Results for query "${query}":`, results);
      setMovies(results);
    }
  };

  return (
    <div className="container"> {/* Apply Bootstrap container class */}
      <h1 className="mt-4 mb-4">Movie Discovery</h1> {/* Apply Bootstrap margin classes */}
      <SearchBar onSearch={handleSearchResults} />
      <MovieList movies={movies} />
      
    </div>
  );
};

export default App;

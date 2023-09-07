import React, { useState } from 'react';
import LoadingIndicator from './LoadingIndicator';

interface SearchBarProps {
  onSearch: (query: string, results: any[], error: Error | null) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSearch = async () => {
    setLoading(true); // Set loading state to true when initiating search

    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        console.log('API CONNECTION SUCCESS :)');
        const results = data.Search || [];
        console.log('This is the data', results);
        onSearch(query, results, null);
        setStatusMessage(null);
      } else {
        console.log('API CONNECTION FAILED :(');
        console.log('No results found for query:', query);
        onSearch(query, [], new Error('No results found'));
        setStatusMessage(`No results found for "${query}". It either doesn't exist or it's not in the database.`);
      }
    } catch (error) {
      console.log('API CONNECTION FAILED :(');
      console.error(error as Error);
      onSearch(query, [], error as Error);
      setStatusMessage('An error occurred during the search.');
    } finally {
      setLoading(false); // Set loading state to false after search is completed
    }
  };

  return (
    <div>
      <input
        id="search-input"
        type="text"
        placeholder="Enter keywords..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <LoadingIndicator /> // Display loading indicator when loading is true
      ) : (
        statusMessage && <p>{statusMessage}</p>
      )}
    </div>
  );
};

export default SearchBar;
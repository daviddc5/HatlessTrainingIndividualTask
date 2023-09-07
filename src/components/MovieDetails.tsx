import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from './Home';



const MovieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();

  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const url = `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Year}</p>
      <img src={movie.Poster} alt="Movie poster" />
      <p>Type: {movie.Type}</p>
    </div>
  );
};

export default MovieDetails;

import React, { useState } from 'react';
import AddMovieForm from './components/addMovies';
import './App.css';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className='movie-card'>
      <img src={posterURL} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <p className='rating'>Rating: {rating}</p>
    </div>
  );
}

const MovieList = ({ movies }) => {
  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <MovieCard key={movie.title} {...movie} />
      ))}
    </div>
  );
}

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  }

  const handleRatingChange = e => {
    setRating(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    onFilter({ title, rating });
  }

  return (
    <form onSubmit={handleSubmit} className='filter-form'>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Rating:
        <input type="text" value={rating} onChange={handleRatingChange} />
      </label>
      <button type="submit">Filter</button>
    </form>
  );
}

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://m.media-amazon.com/images/I/519NBNHX5BL.jpg',
      rating: '9.2'
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      rating: '9.2'
    },
    {
      title: 'The Godfather: Part II',
      description: 'The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his gripon his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.',
      posterURL: 'https://m.media-amazon.com/images/I/51PNHSY6B8L.jpg',
      rating: '9.0'
      }
      ]);
      
      const [filteredMovies, setFilteredMovies] = useState(movies);
      
      const handleFilter = ({ title, rating }) => {
      let newFilteredMovies = movies;
      if (title) {
        newFilteredMovies = newFilteredMovies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
      }
      
      if (rating) {
        newFilteredMovies = newFilteredMovies.filter(movie => movie.rating === rating);
      }
      
      setFilteredMovies(newFilteredMovies);
    }

    const handleAddMovie = newMovie => {
    setMovies([...movies, newMovie]);
    }
    
    return (
    <div className='container'>
    <Filter onFilter={handleFilter} />
    <MovieList movies={filteredMovies} />
    <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
    );
    }
    
    export default App;      

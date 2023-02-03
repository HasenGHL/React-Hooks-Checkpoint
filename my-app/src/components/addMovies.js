import React, { useState } from 'react';
import "../App.css";

const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const handlePosterURLChange = e => {
    setPosterURL(e.target.value);
  }

  const handleRatingChange = e => {
    setRating(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    onAddMovie({ title, description, posterURL, rating });
    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  }

  return (
    <form onSubmit={handleSubmit} className='add-movie-form'>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <label>
        Poster URL:
        <input type="text" value={posterURL} onChange={handlePosterURLChange} />
      </label>
      <label>
        Rating:
        <input type="text" value={rating} onChange={handleRatingChange} />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;

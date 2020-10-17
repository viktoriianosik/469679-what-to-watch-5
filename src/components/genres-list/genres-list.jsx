import React from "react";
import PropTypes from "prop-types";
import MovieProp from "../../types";

const GenresList = (props) => {
  const {movies, onGenreClick} = props;
  const genres = [`All genres`];
  movies.map((movie) => genres.push(movie.genre));
  const uniqueGenres = [...new Set(genres)].slice(0, 9);

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre, i) => (
        <li key={`${i}-item`} className="catalog__genres-item" onClick={(evt) => {
          evt.preventDefault();
          onGenreClick(genre, movies);
        }}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  movies: PropTypes.arrayOf(MovieProp),
  onGenreClick: PropTypes.func.isRequired,
};

export default GenresList;

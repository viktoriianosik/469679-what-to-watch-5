import React from "react";
import PropTypes from "prop-types";
import MovieProp from "../../types";

const GenresList = (props) => {
  const {movies, onGenreClick} = props;
  const genres = [`All genres`];
  const uniqueGenres = [...new Set(genres)].slice(0, 9);
  movies.forEach((movie) => genres.push(movie.genre));

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre, i) => (
        <li key={`${i}-item`} className="catalog__genres-item">
          <a 
            href="#" 
            className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(genre, movies);
            }}
          >{genre}</a>
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

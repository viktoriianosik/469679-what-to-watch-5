import React from "react";
import PropTypes from "prop-types";
import MoviePropTypes from "../movie/movie-props";
import {connect} from "react-redux";

const GenresList = (props) => {
  const {movies, onGenreClick, activeGenre} = props;
  const genres = [`All genres`];
  let uniqueGenres = [];

  movies.forEach((movie) => genres.push(movie.genre));
  uniqueGenres = [...new Set(genres)].slice(0, 9);

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre, i) => (
        <li key={`${i}-item`} className={`catalog__genres-item ${activeGenre === genre && `catalog__genres-item--active`}`}>
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
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  activeGenre: PROCESS.genre,
});

export {GenresList};
export default connect(mapStateToProps)(GenresList);

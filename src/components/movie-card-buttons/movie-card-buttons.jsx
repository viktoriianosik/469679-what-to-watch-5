import React from "react";
import PropTypes from "prop-types";
import MoviePropTypes from "../movie/movie-props";
import {extend} from "../../utils";
import {withRouter} from "react-router-dom";

const MovieCardButtons = (props) => {
  const {movie, onFavoriteClick} = props;

  const handlePlayButtonClick = (movieID) => {
    props.history.push(`/player/${movieID}`);
  };

  const handleFavoriteButtonClick = (movieItem, onClick) => {
    let status = 1;
    if (movieItem.isFavorite) {
      status = 0;
    }
    const updatedMovie = extend(movieItem, {
      isFavorite: !movieItem.isFavorite,
    });
    onClick(movieItem.id, status, updatedMovie);
  };


  return (
    <React.Fragment>
      <button className="btn btn--play movie-card__button" type="button" onClick={() => handlePlayButtonClick(movie.id)}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button" onClick={() => handleFavoriteButtonClick(movie, onFavoriteClick)}>
        {movie.isFavorite
          ? <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
          : <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        }
        <span>My list</span>
      </button>
    </React.Fragment>
  );
};

MovieCardButtons.propTypes = {
  movie: MoviePropTypes.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

export default withRouter(MovieCardButtons);

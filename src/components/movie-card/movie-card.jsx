import React from "react";
import PropTypes from "prop-types";
import MoviesType from "../../types";

const MovieCard = (props) => {
  const {movie, onMouseEnterCard, onMouseLeaveCard, onCardClick} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMouseEnterCard(movie.id)} onMouseLeave={onMouseLeaveCard} onClick={() => onCardClick(movie.id)}>
      <div className="small-movie-card__image">
        <img src={movie.picture} alt={movie.name} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link">{movie.name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: MoviesType,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default MovieCard;

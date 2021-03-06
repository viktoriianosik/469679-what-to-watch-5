import React from "react";
import PropTypes from "prop-types";
import MoviePropTypes from "../movie/movie-props";
import VideoPreview from "../video-preview/video-preview";

const MovieCard = (props) => {
  const {movie, onMouseEnterCard, onMouseLeaveCard, onCardClick, isPlaying} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onMouseEnterCard} onMouseLeave={onMouseLeaveCard} onClick={onCardClick}>
      <div className="small-movie-card__image">
        {isPlaying ? <VideoPreview isPlaying={isPlaying} src={movie.previewVideoLink} muted={true} /> : <img src={movie.posterImage} alt={movie.name} width="280" height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link">{movie.name}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: MoviePropTypes.isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default MovieCard;

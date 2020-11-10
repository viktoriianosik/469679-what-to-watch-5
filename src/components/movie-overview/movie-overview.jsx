import React, {Fragment} from "react";
import MoviePropTypes from "../movie/movie-props";
import {convertRatingToLevel} from "../../utils";

const MovieOverview = ({movie}) => {
  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{convertRatingToLevel(movie.rating)}</span>
          <span className="movie-rating__count">{movie.scores_count} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{movie.description}</p>
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {movie.starring.slice(0, 4).map((item) => item).join(`, `)}
          {movie.starring.length > 4 ? ` and other` : ``}
        </strong></p>
      </div>
    </Fragment>
  );
};


MovieOverview.propTypes = {
  movie: MoviePropTypes,
};

export default MovieOverview;

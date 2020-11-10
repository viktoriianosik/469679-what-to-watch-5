import React, {Fragment} from "react";
import {getTimeFromMins} from "../../utils";
import MoviePropTypes from "../movie/movie-props";

const MovieDetails = ({movie}) => {
  return (
    <Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{movie.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {movie.starring.map((item, i) => (
                movie.starring.length - 1 === i ?
                  item :
                  <Fragment key={`starring-${i}`}>
                    {item}, <br />
                  </Fragment>
              ))}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getTimeFromMins(movie.run_time)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{movie.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{movie.released}</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

MovieDetails.propTypes = {
  movie: MoviePropTypes,
};

export default MovieDetails;

import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import MovieType from "../../types";

const MoviesList = (props) => {
  const {movies, onMouseEnterCard, onMouseLeaveCard, onCardClick, activeMovie} = props;

  return (
    <React.Fragment>
      {
        movies.map((movie, i) => (
          <MovieCard
            key={`movie ${i}`}
            movie={movie}
            onMouseEnterCard={() => {
              onMouseEnterCard(movie.id);
            }}
            onMouseLeaveCard={onMouseLeaveCard}
            onCardClick={() => {
              onCardClick(movie.id);
            }}
            isPlaying={movie.id === activeMovie}
          />
        ))
      }
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType).isRequired,
  activeMovie: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default MoviesList;

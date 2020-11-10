import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import MoviePropTypes from "../movie/movie-props";
import ShowMore from "../show-more/show-more";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {MOVIES_COUNT} from "../../const";

const MoviesList = (props) => {
  const {
    movies,
    onMouseEnterCard,
    onMouseLeaveCard,
    onCardClick,
    activeMovie,
    moviesCount,
    onMoreButtonClick,
  } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {
          movies.slice(0, moviesCount).map((movie, i) => (
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
      </div>
      {movies.length > moviesCount && <ShowMore onMoreButtonClick={() => {
        onMoreButtonClick(moviesCount + MOVIES_COUNT);
      }}/>}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  activeMovie: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onMouseEnterCard: PropTypes.func.isRequired,
  onMouseLeaveCard: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onMoreButtonClick: PropTypes.func.isRequired,
  moviesCount: PropTypes.number.isRequired,
};

const mapStateToProps = ({PROCESS}) => ({
  moviesCount: PROCESS.moviesCount
});

const mapDispatchToProps = (dispatch) => ({
  onMoreButtonClick(moviesCount) {
    dispatch(ActionCreator.changeMoviesCountList(moviesCount));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

import React from "react";
import PropTypes from "prop-types";
import {getPromoMovie} from "../../store/selectors";
import {connect} from "react-redux";
import MoviePropTypes from "../movie/movie-props";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons";
import {toggleFavorite} from "../../store/api-action";

const PromoMovie = (props) => {
  const {children, promoMovie, onFavoriteClick} = props;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={promoMovie.backgroundImage} alt={promoMovie.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      {children}
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={promoMovie.posterImage} alt={promoMovie.name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{promoMovie.name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{promoMovie.genre}</span>
              <span className="movie-card__year">{promoMovie.released}</span>
            </p>

            <div className="movie-card__buttons">
              <MovieCardButtons movie={promoMovie} onFavoriteClick={onFavoriteClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoMovie.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  promoMovie: MoviePropTypes.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(filmID, status, movie) {
    dispatch(toggleFavorite(filmID, status, movie));
  }
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(PromoMovie);

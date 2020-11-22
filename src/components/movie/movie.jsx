import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MoviePropTypes from "./movie-props";
import {Link, withRouter} from "react-router-dom";
import Tabs from "../tabs/tabs";
import withTabs from "../../hocs/with-tabs/with-tabs";
import MoviesList from "../movies-list/movies-list";
import {SIMILAR_MOVIES_COUNT} from "../../const";
import withMoviesList from "../../hocs/with-movies-list/with-movies-list";
import Header from "../header/header";
import {compose} from "redux";
import {connect} from "react-redux";
import {getMovie, getMoviesList} from "../../store/selectors";
import {store} from "../../index";
import {fetchMovie, fetchReviewsList, toggleFavorite} from "../../store/api-action";
import Footer from "../footer/footer";
import MovieCardButtons from "../movie-card-buttons/movie-card-buttons";

const MoviesListWrapper = withMoviesList(MoviesList);
const TabsWrapper = withTabs(Tabs);

class Movie extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {movieID} = this.props;
    store.dispatch(fetchMovie(movieID));
    store.dispatch(fetchReviewsList(movieID));
  }

  render() {
    const {movies, movie, onFavoriteClick} = this.props;

    if (movie === null) {
      return null;
    }

    const similarMovies = movies
    .filter((item) => item.genre === movie.genre && item.id !== movie.id)
    .slice(0, SIMILAR_MOVIES_COUNT);

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full" style={{background: `${movie.backgroundColor}`}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={movie.backgroundImage} alt={movie.name} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <Header />
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{movie.name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{movie.genre}</span>
                  <span className="movie-card__year">{movie.released}</span>
                </p>
                <div className="movie-card__buttons">
                  <MovieCardButtons movie={movie} onFavoriteClick={onFavoriteClick} />
                  <Link to={`/films/${movie.id}/review`} className="btn movie-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
              </div>
              <div className="movie-card__desc">
                <TabsWrapper movie={movie}/>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesListWrapper movies={similarMovies} />
          </section>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

Movie.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  movie: MoviePropTypes,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  movieID: PropTypes.string.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMoviesList(state),
  movie: getMovie(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(filmID, status, movie) {
    dispatch(toggleFavorite(filmID, status, movie));
  }
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Movie);

import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import withMoviesList from "../../hocs/with-movies-list/with-movies-list";
import MoviePropTypes from "../movie/movie-props";
import Header from "../header/header";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {getMoviesByGenre, getMoviesList} from "../../store/selectors";
import PromoMovie from "../promo-movie/promo-movie";
import Footer from "../footer/footer";

const MoviesListWrapper = withMoviesList(MoviesList);

const Main = (props) => {
  const {movies, filteredMovies, onGenreClick} = props;

  return <React.Fragment>
    <PromoMovie>
      <Header />
    </PromoMovie>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList movies={movies} onGenreClick={onGenreClick}/>
        <MoviesListWrapper movies={filteredMovies} />
      </section>
      <Footer />
    </div>
  </React.Fragment>;
};

Main.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes),
  filteredMovies: PropTypes.arrayOf(MoviePropTypes),
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  movies: getMoviesList(state),
  filteredMovies: getMoviesByGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

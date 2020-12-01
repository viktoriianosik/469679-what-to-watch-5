import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MoviePropTypes from "../movie/movie-props";
import Header from "../header/header";
import MoviesList from "../movies-list/movies-list";
import withMoviesList from "../../hocs/with-movies-list/with-movies-list";
import {getFavoriteMovies} from "../../store/selectors";
import {connect} from "react-redux";
import Footer from "../footer/footer";
import {store} from "../../index";
import {fetchFavoriteList} from "../../store/api-action";

const MoviesListWrapper = withMoviesList(MoviesList);

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(fetchFavoriteList());
  }

  render() {
    const {favoriteMovies} = this.props;

    return (
      <div className="user-page">
        <Header className={` user-page__head`}>
          <h1 className="page-title user-page__title">My list</h1>
        </Header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MoviesListWrapper movies={favoriteMovies} />
        </section>
        <Footer/>
      </div>
    );
  }
}

MyList.propTypes = {
  favoriteMovies: PropTypes.arrayOf(MoviePropTypes.isRequired),
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
});

export {MyList};
export default connect(mapStateToProps)(MyList);

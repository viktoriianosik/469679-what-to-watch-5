import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import AddReview from "../add-review/add-review";
import withAddReview from "../../hocs/with-add-review/with-add-review";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import withPlayer from "../../hocs/with-player/with-player";
import MoviePropTypes from "../movie/movie-props";
import ReviewPropTypes from "../movie-reviews/movie-review-props";
import {connect} from "react-redux";
import {getMovies} from "../../store/selectors";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const PlayerWrapper = withPlayer(Player);
const AddReviewWrapper = withAddReview(AddReview);

const App = (props) => {
  const {name, genre, year, movies} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main name={name} genre={genre} year={year} movies={movies}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Movie movies={movies}/>
        </Route>
        <PrivateRoute
          exact
          path={`/films/:id/review`}
          render={() => {
            return <AddReviewWrapper movies={movies}/>;
          }}
        />
        <Route exact path="/player/:id">
          <PlayerWrapper movies={movies}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(MoviePropTypes),
  reviews: PropTypes.arrayOf(ReviewPropTypes),
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(App);

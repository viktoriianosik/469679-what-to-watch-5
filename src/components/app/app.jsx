import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, HashRouter as BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import AddReview from "../add-review/add-review";
import withAddReview from "../../hocs/with-add-review/with-add-review";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import withPlayer from "../../hocs/with-player/with-player";
import MoviePropTypes from "../movie/movie-props";
import {connect} from "react-redux";
import {getMoviesList} from "../../store/selectors";
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const PlayerWrapper = withPlayer(Player);
const AddReviewWrapper = withAddReview(AddReview);

const App = (props) => {
  const {movies} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <Main movies={movies}/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route
          exact
          path="/films/:id"
          render={({match}) => {
            return <Movie movieID={match.params.id} key={match.params.id}/>;
          }}
        />
        <PrivateRoute
          exact
          path={`/films/:id/review`}
          render={({match}) => {
            return <AddReviewWrapper movieID={match.params.id}/>;
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
  movies: PropTypes.arrayOf(MoviePropTypes),
};

const mapStateToProps = (state) => ({
  movies: getMoviesList(state),
});

export default connect(mapStateToProps)(App);

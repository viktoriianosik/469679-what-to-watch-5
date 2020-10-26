import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import AddReview from "../add-review/add-review";
import withAddReview from "../../hocs/with-add-review/with-add-review";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import MovieType from "../../types";


const AddReviewWrapper = withAddReview(AddReview);

const App = (props) => {
  const {name, genre, year, movies} = props;
  return (
    <BrowserRouter>
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
        <Route exact path="/films/:id/review">
          <AddReviewWrapper movies={movies}/>
        </Route>
        <Route exact path="/player/:id">
          <Player movies={movies}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(MovieType),
};

export default App;

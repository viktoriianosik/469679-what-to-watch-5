import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../main/main";
import Login from "../login/login";
import AddReview from "../add-review/add-review";
import Movie from "../movie/movie";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import withPlayer from "../../hocs/with-player/with-player";
import MovieType from "../../types";

const PlayerWrapper = withPlayer(Player);

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
          <AddReview movies={movies}/>
        </Route>
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
  movies: PropTypes.arrayOf(MovieType),
};

export default App;

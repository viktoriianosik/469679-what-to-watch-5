import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/app/app";
import movies from "./mocks/movies";
import {reducer} from "./store/reducer";

const FilmSetting = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDom.render(
    <Provider store = {store}>
      <App name={FilmSetting.NAME} genre={FilmSetting.GENRE} year={FilmSetting.YEAR} movies={movies}/>
    </Provider>,
    document.querySelector(`#root`)
);

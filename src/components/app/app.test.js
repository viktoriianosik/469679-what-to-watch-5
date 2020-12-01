import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {testMovies} from "../../test-data/test-movies";
import {AuthorizationStatus} from "../../const";

describe(`Render component App correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let appComponent = null;

  beforeEach(() => {
    store = mockStore({
      DATA: {
        movies: testMovies,
        promoMovie: testMovies[0],
      },
      PROCESS: {
        genre: `All genres`,
        moviesCount: 2,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    store.dispatch = jest.fn();

    appComponent = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>
    );
  });

  it(`Should App connected to store render correctly`, () => {
    expect(appComponent.toJSON()).toMatchSnapshot();
  });
});

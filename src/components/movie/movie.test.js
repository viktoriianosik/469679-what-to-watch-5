import React from "react";
import renderer from "react-test-renderer";
import Movie from "./movie";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {testMovies} from "../../test-data/test-movies";
import {AuthorizationStatus} from "../../const";
import {MemoryRouter} from "react-router-dom";

describe(`Render component Movie correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let movieComponent = null;

  beforeEach(() => {
    store = mockStore({
      DATA: {
        movies: testMovies,
        movie: testMovies[0],
      },
      PROCESS: {
        moviesCount: 2,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    store.dispatch = jest.fn();

    movieComponent = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <Movie
              onFavoriteClick={() => {}}
            />
          </MemoryRouter>
        </Provider>
    );
  });

  it(`Should App connected to store render correctly`, () => {
    expect(movieComponent.toJSON()).toMatchSnapshot();
  });
});

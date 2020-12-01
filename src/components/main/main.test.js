import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {testMovies} from "../../test-data/test-movies";
import {AuthorizationStatus} from "../../const";
import {MemoryRouter} from "react-router-dom";

describe(`Render component Main correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let mainComponent = null;

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

    mainComponent = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <Main
              onGenreClick={() => {}}
            />
          </MemoryRouter>
        </Provider>
    );
  });

  it(`Should App connected to store render correctly`, () => {
    expect(mainComponent.toJSON()).toMatchSnapshot();
  });
});

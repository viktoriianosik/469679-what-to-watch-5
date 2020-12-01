import React from "react";
import renderer from "react-test-renderer";
import MyList from "./my-list";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {testMovies} from "../../test-data/test-movies";
import {AuthorizationStatus} from "../../const";
import {MemoryRouter} from "react-router-dom";

describe(`Render component MyList correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let myListComponent = null;

  beforeEach(() => {
    store = mockStore({
      DATA: {
        favoriteMovies: testMovies,
      },
      PROCESS: {
        moviesCount: 2,
      },
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    store.dispatch = jest.fn();

    myListComponent = renderer.create(
        <Provider store={store}>
          <MemoryRouter>
            <MyList />
          </MemoryRouter>
        </Provider>
    );
  });

  it(`Should MyList connected to store render correctly`, () => {
    expect(myListComponent.toJSON()).toMatchSnapshot();
  });
});

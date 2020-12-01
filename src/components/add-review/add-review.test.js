import React from "react";
import renderer from "react-test-renderer";
import AddReview from "./add-review";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {testMovies} from "../../test-data/test-movies";
import {MemoryRouter} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

const noop = () => {};

describe(`Render AddReview correctly`, () => {
  describe(`Render AddReview correctly without error message`, () => {
    const mockStore = configureStore([]);
    let store = null;
    let addReviewComponent = null;

    beforeEach(() => {
      store = mockStore({
        DATA: {
          movie: testMovies[0],
        },
        ERROR: {
          errorMessage: ``,
        },
        USER: {
          authorizationStatus: AuthorizationStatus.AUTH,
        }
      });

      store.dispatch = jest.fn();

      addReviewComponent = renderer.create(
          <Provider store={store}>
            <MemoryRouter keyLength={0}>
              <AddReview
                userStars={[true, true, true, true, true]}
                onInputChange={noop}
                onTextChange={noop}
                onSubmit={noop}
                movieID={`1`}
              />
            </MemoryRouter>
          </Provider>
      );
    });

    it(``, () => {
      expect(addReviewComponent.toJSON()).toMatchSnapshot();
    });
  });

  describe(`Render AddReview correctly with error message`, () => {
    const mockStore = configureStore([]);
    let store = null;
    let addReviewComponent = null;

    beforeEach(() => {
      store = mockStore({
        DATA: {
          movie: testMovies[0],
        },
        ERROR: {
          errorMessage: `error 404`,
        },
        USER: {
          authorizationStatus: AuthorizationStatus.AUTH,
        }
      });

      store.dispatch = jest.fn();

      addReviewComponent = renderer.create(
          <Provider store={store}>
            <MemoryRouter keyLength={0}>
              <AddReview
                userStars={[true, true, true, true, true]}
                onInputChange={noop}
                onTextChange={noop}
                onSubmit={noop}
                movieID={`1`}
              />
            </MemoryRouter>
          </Provider>
      );
    });

    it(``, () => {
      expect(addReviewComponent.toJSON()).toMatchSnapshot();
    });
  });
});

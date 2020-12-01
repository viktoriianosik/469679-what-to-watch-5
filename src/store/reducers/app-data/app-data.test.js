import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {ActionType} from "../../action";
import {testMovies} from "../../../test-data/test-movies";
import {testReviews} from "../../../test-data/test-reviews";
import {appData} from "./app-data";
import {fetchMovieList, fetchMovie, fetchPromoMovie, fetchReviewsList, fetchFavoriteList, commentPost, toggleFavorite} from "../../api-action";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appData(void 0, {})).toEqual({
    movies: [],
    reviews: [],
    movie: null,
    promoMovie: {},
    favoriteMovies: [],
  });
});

it(`Reducer should update movies by load movies`, () => {
  expect(appData({
    movies: [],
    reviews: [],
    movie: null,
    promoMovie: {},
    favoriteMovies: [],
  }, {
    type: ActionType.LOAD_MOVIES,
    payload: testMovies,
  })).toEqual({
    movies: testMovies,
    reviews: [],
    movie: null,
    promoMovie: {},
    favoriteMovies: [],
  });
});

it(`Reducer should update movie by load movie`, () => {
  expect(appData({
    movies: [],
    reviews: [],
    movie: null,
    promoMovie: {},
    favoriteMovies: [],
  }, {
    type: ActionType.LOAD_MOVIE,
    payload: testMovies[1],
  })).toEqual({
    movies: [],
    reviews: [],
    movie: testMovies[1],
    promoMovie: {},
    favoriteMovies: [],
  });
});

it(`Reducer should update promoMovie by load promoMovie`, () => {
  expect(appData({
    movies: [],
    reviews: [],
    movie: null,
    promoMovie: {},
    favoriteMovies: [],
  }, {
    type: ActionType.LOAD_PROMO_MOVIE,
    payload: testMovies[0],
  })).toEqual({
    movies: [],
    reviews: [],
    movie: null,
    promoMovie: testMovies[0],
    favoriteMovies: [],
  });
});

it(`Reducer should update reviews by load reviews`, () => {
  expect(appData({
    movies: [],
    reviews: [],
    movie: null,
    promoMovie: {},
    favoriteMovies: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: testReviews,
  })).toEqual({
    movies: [],
    reviews: testReviews,
    movie: null,
    promoMovie: {},
    favoriteMovies: [],
  });
});

it(`Reducer should update favoriteMovies by load favoriteMovies`, () => {
  expect(appData({
    movies: [],
    reviews: [],
    movie: null,
    promoMovie: {},
    favoriteMovies: [],
  }, {
    type: ActionType.LOAD_FAVORITE_LIST,
    payload: testMovies[1],
  })).toEqual({
    movies: [],
    reviews: [],
    movie: null,
    promoMovie: {},
    favoriteMovies: testMovies[1],
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = fetchMovieList();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const movieLoader = fetchMovie(1);

    apiMock
      .onGet(`/films/1`)
      .reply(200, [{fake: true}]);

    return movieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = fetchPromoMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviewsList(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeComment = {rating: 3, comment: `good`};
    const commentLoader = commentPost(1, fakeComment);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [{fake: true}]);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: `/films/1`,
        });
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CATCH_ERROR_MESSAGE,
          payload: `message`,
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = fetchFavoriteList();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return favoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_LIST,
          payload: [{fake: true}],
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeFavorite = testMovies[1];
    const favoriteLoader = toggleFavorite(1, 0, fakeFavorite);

    apiMock
      .onPost(`/favorite/1/0`)
      .reply(200, [{fake: true}]);

    return favoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIE,
          payload: [{fake: true}],
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: [{fake: true}],
        });
      });
  });
});

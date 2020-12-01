import {ActionType, ActionCreator} from "./action";
import {testMovies} from "../test-data/test-movies";
import {testReviews} from "../test-data/test-reviews";
import {AuthorizationStatus} from "../const";

describe(`Action creators work correctly`, () => {
  it(`Action creator for changeGenre returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Drama`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Drama`,
    });
  });

  it(`Action creator for changeMoviesCountList returns correct action`, () => {
    expect(ActionCreator.changeMoviesCountList(16)).toEqual({
      type: ActionType.CHANGE_MOVIES_COUNT_IN_LIST,
      payload: 16,
    });
  });

  it(`Action creator for loadMovies returns correct action`, () => {
    expect(ActionCreator.loadMovies(testMovies)).toEqual({
      type: ActionType.LOAD_MOVIES,
      payload: testMovies,
    });
  });

  it(`Action creator for loadMovie returns correct action`, () => {
    expect(ActionCreator.loadMovie(testMovies[0])).toEqual({
      type: ActionType.LOAD_MOVIE,
      payload: testMovies[0],
    });
  });

  it(`Action creator for loadPromoMovie returns correct action`, () => {
    expect(ActionCreator.loadPromoMovie(testMovies[1])).toEqual({
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: testMovies[1],
    });
  });

  it(`Action creator for loadReview returns correct action`, () => {
    expect(ActionCreator.loadReviews(testReviews)).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: testReviews,
    });
  });

  it(`Action creator for loadFavoriteList returns correct action`, () => {
    expect(ActionCreator.loadFavoriteList(testMovies)).toEqual({
      type: ActionType.LOAD_FAVORITE_LIST,
      payload: testMovies,
    });
  });

  it(`Action creator for requireAuthorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for redirectToRoute returns correct action`, () => {
    expect(ActionCreator.redirectToRoute(`/`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`,
    });
  });

  it(`Action creator for catchErrorMessage returns correct action`, () => {
    expect(ActionCreator.catchErrorMessage(`404`)).toEqual({
      type: ActionType.CATCH_ERROR_MESSAGE,
      payload: `404`,
    });
  });
});

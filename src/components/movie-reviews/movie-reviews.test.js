import React from "react";
import renderer from "react-test-renderer";
import MovieReviews from "./movie-reviews";
import {testReviews} from "../../test-data/test-reviews";

it(`Render component MovieReviews correctly`, () => {
  const tree = renderer.create(
      <MovieReviews
        reviews={testReviews}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

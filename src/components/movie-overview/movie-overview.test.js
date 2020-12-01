import React from "react";
import renderer from "react-test-renderer";
import MovieOverview from "./movie-overview";
import {testMovies} from "../../test-data/test-movies";

it(`Render component MovieOverview correctly`, () => {
  const tree = renderer.create(
      <MovieOverview
        movie={testMovies[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

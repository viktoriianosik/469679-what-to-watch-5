import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./movie-details";
import {testMovies} from "../../test-data/test-movies";

it(`Render component MovieDetails correctly`, () => {
  const tree = renderer.create(
      <MovieDetails
        movie={testMovies[0]}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

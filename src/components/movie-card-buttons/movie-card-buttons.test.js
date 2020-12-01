import React from "react";
import renderer from "react-test-renderer";
import MovieCardButtons from "./movie-card-buttons";
import {testMovies} from "../../test-data/test-movies";
import {MemoryRouter} from "react-router-dom";

const noop = () => {};

it(`Render component MovieCardButtons correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <MovieCardButtons
          movie={testMovies[0]}
          onFavoriteClick={noop}
        />
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

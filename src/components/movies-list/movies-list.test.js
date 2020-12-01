import React from "react";
import renderer from "react-test-renderer";
import {MoviesList} from "./movies-list";
import {testMovies} from "../../test-data/test-movies";

const noop = () => {};

it(`Render component MoviesList correctly`, () => {
  const tree = renderer.create(
      <MoviesList
        movies={testMovies}
        activeMovie={testMovies[0]}
        onCardClick={noop}
        onMoreButtonClick={noop}
        onMouseEnterCard={noop}
        onMouseLeaveCard={noop}
        moviesCount={2}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./movie-card";
import {testMovies} from "../../test-data/test-movies";

const noop = () => {};

describe(`Render component MovieCard correctly`, () => {
  it(`Render component MovieCard playing`, () => {
    const tree = renderer.create(
        <MovieCard
          movie={testMovies[0]}
          onCardClick={noop}
          onMouseEnterCard={noop}
          onMouseLeaveCard={noop}
          isPlaying={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render component MovieCard doesn't playing`, () => {
    const tree = renderer.create(
        <MovieCard
          movie={testMovies[0]}
          onCardClick={noop}
          onMouseEnterCard={noop}
          onMouseLeaveCard={noop}
          isPlaying={false}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {testMovies} from "../../test-data/test-movies";

it(`Render component GenreList correctly`, () => {
  const tree = renderer.create(
      <GenresList
        movies={testMovies}
        onGenreClick={() => {}}
        activeGenre={`All`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

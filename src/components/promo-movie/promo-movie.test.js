import React from "react";
import renderer from "react-test-renderer";
import {PromoMovie} from "./promo-movie";
import {testMovies} from "../../test-data/test-movies";
import {MemoryRouter} from "react-router-dom";

const noop = () => {};

it(`Render component PromoMovie correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <PromoMovie
          promoMovie={testMovies[0]}
          onFavoriteClick={noop}
        >
          <React.Fragment/>
        </PromoMovie>
      </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

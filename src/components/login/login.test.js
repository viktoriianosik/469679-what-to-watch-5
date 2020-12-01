import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {Login} from "./login";

it(`Render component Login correctly`, () => {
  const tree = renderer.create(
      <MemoryRouter>
        <Login
          onSubmit={() => {}}
        />
      </MemoryRouter>
      , {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

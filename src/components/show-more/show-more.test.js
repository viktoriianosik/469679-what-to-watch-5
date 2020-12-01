import React from "react";
import renderer from "react-test-renderer";
import ShowMore from "./show-more";

it(`Render component ShowMore correctly`, () => {
  const tree = renderer.create(
      <ShowMore
        onMoreButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

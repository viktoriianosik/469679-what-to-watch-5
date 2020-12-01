import React from "react";
import renderer from "react-test-renderer";
import ErrorMessage from "./error-message";


it(`Render component ErrorMessage correctly`, () => {
  const tree = renderer.create(
      <ErrorMessage
        message={`Error 404`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

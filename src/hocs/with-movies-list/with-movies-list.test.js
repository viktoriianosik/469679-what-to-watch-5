import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withMoviesList from "./with-movies-list";
import {MemoryRouter} from "react-router-dom";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withMoviesList(MockComponent);

it(`withMoviesList is rendered correctly`, () => {
  const tree = renderer.create((
    <MemoryRouter>
      <MockComponentWrapped>
        <React.Fragment />
      </MockComponentWrapped>
    </MemoryRouter>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});

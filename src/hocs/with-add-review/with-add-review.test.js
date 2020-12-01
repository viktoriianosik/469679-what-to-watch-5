import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withAddReview from "./with-add-review";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

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

const MockComponentWrapped = withAddReview(MockComponent);

describe(`withAddReview is rendered correctly`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let withAddReviewComponent = null;

  beforeEach(() => {
    store = mockStore({
    });

    store.dispatch = jest.fn();

    withAddReviewComponent = renderer.create(
        <Provider store={store}>
          <MockComponentWrapped
            onSubmit={() => {}}
          >
            <React.Fragment />
          </MockComponentWrapped>
        </Provider>
    );
  });

  it(`Should withAddReviewComponent connected to store render correctly`, () => {
    expect(withAddReviewComponent.toJSON()).toMatchSnapshot();
  });
});

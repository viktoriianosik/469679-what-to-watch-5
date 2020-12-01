import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from "./tabs";
import {testMovies} from "../../test-data/test-movies";
import {testReviews} from "../../test-data/test-reviews";

describe(`Render component Tabs correctly`, () => {
  it(`Render component Tab Overview`, () => {
    const tree = renderer.create(
        <Tabs
          movie={testMovies[0]}
          reviews={testReviews}
          activeTab={`Overview`}
          onTabClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render component Tab Reviews`, () => {
    const tree = renderer.create(
        <Tabs
          movie={testMovies[0]}
          reviews={testReviews}
          activeTab={`Reviews`}
          onTabClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

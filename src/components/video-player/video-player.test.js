import React from "react";
import renderer from "react-test-renderer";
import {VideoPlayer} from "./video-player";

it(`Render component VideoPlayer correctly`, () => {
  const tree = renderer.create(
      <VideoPlayer
        isPlaying={true}
        muted={false}
        onTimeUpdate={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

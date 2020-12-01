import React from "react";
import renderer from "react-test-renderer";
import VideoPreview from "./video-preview";

it(`Render component VideoPreview correctly`, () => {
  const tree = renderer.create(
      <VideoPreview
        isPlaying={true}
        muted={true}
        src={`img/*`}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import {Player} from "./player";
import {testMovies} from "../../test-data/test-movies";

const noop = () => {};

it(`Render component Player correctly`, () => {
  const tree = renderer.create(
      <Player
        movies={testMovies}
        onPlayButtonClick={noop}
        onTimeUpdate={noop}
        isPlayingMovie={true}
        onFullScreenButtonClick={noop}
        isFullScreen={false}
        timeElapsed={`1h 12min`}
        progress={10}
        match={{params: {id: `1`}}}
      />
      , {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

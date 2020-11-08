import React, {Fragment} from "react";
import PropTypes from "prop-types";

const VideoPreview = (props) => {
  const {isPlaying, muted, src} = props;

  return (
    <Fragment>
      <video src={src} autoPlay={isPlaying} className="player__video" muted={muted}></video>
    </Fragment>
  );
};

VideoPreview.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired
};

export default VideoPreview;

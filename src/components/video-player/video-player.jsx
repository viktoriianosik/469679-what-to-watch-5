import React, {createRef, Fragment, PureComponent} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;

    video.src = src;
  }

  render() {
    const {isPlaying} = this.props;

    return (
      <Fragment>
        <video autoPlay={isPlaying} ref={this._videoRef} width="280" height="175" muted="muted"></video>
      </Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoPlayer;

import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {isPlaying, muted, onTimeUpdate} = this.props;

    return (
      <Fragment>
        <video autoPlay={isPlaying} ref={this.props.innerRef} className="player__video" muted={muted} onTimeUpdate={onTimeUpdate}></video>
      </Fragment>
    );
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  videoRef: PropTypes.string,
  onTimeUpdate: PropTypes.func.isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.instanceOf(Element)})
  ]),
};

export default React.forwardRef((props, ref) => <VideoPlayer
  innerRef={ref} {...props}
/>);

import React, {PureComponent} from "react";
import moment from "moment";
import 'moment-duration-format';

const withPlayer = (Component) => {
  class WithPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlay: true,
        isFullScreen: false,
        timeElapsed: ``,
        progress: 0,
      };

      this.handlePlayButtonClick = this.handlePlayButtonClick.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);
      this.changeFullScreenState = this.changeFullScreenState.bind(this);
      this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }

    changeFullScreenState() {
      if (document.fullscreenElement) {
        this.setState({
          isFullScreen: false,
        });
      }
    }

    componentDidMount() {
      document.addEventListener(`fullscreenchange`, this.changeFullScreenState);
    }

    componentWillUnmount() {
      document.removeEventListener(`fullscreenchange`, this.changeFullScreenState);
    }

    handlePlayButtonClick() {
      this.setState({
        isPlay: !this.state.isPlay,
      });
    }

    handleFullScreenButtonClick() {
      this.setState({
        isFullScreen: true,
      });
    }

    handleTimeUpdate(ref) {
      const video = ref.current;
      const timeElapsed = video.duration - video.currentTime;
      this.setState({
        timeElapsed: moment.duration(timeElapsed, `seconds`).format(`h:mm:ss`, {
          trim: false
        }),
        progress: video.currentTime * 100 / video.duration,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onPlayButtonClick={this.handlePlayButtonClick}
          onFullScreenButtonClick={this.handleFullScreenButtonClick}
          isPlayingMovie={this.state.isPlay}
          isFullScreen={this.state.isFullScreen}
          onTimeUpdate={this.handleTimeUpdate}
          progress={this.state.progress}
          timeElapsed={this.state.timeElapsed}
        />
      );
    }
  }

  return WithPlayer;
};

export default withPlayer;

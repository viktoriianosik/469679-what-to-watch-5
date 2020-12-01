import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import MoviePropTypes from "../movie/movie-props";
import {withRouter} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";

class Player extends PureComponent {
  constructor(props) {
    super(props);

    const {match: {params: {id}}, movies} = this.props;
    this.movie = movies.find((item) => item.id === parseInt(id, 10));
    this._videoRef = createRef();
  }

  componentDidMount() {
    const src = this.movie.videoLink;
    const video = this._videoRef.current;
    video.src = src;
  }

  componentDidUpdate() {
    const {isPlayingMovie, isFullScreen} = this.props;
    const video = this._videoRef.current;

    if (isPlayingMovie) {
      video.play();
    } else {
      video.pause();
    }

    if (isFullScreen) {
      video.requestFullscreen();
    }
  }

  handleExitButtonClick(movieID) {
    this.props.history.push(`/films/${movieID}`);
  }

  render() {
    const {onPlayButtonClick, isPlayingMovie, onFullScreenButtonClick, timeElapsed, progress, onTimeUpdate} = this.props;

    return (
      <div className="player">
        <VideoPlayer isPlaying={isPlayingMovie} ref={this._videoRef} muted={false} onTimeUpdate={() => {
          onTimeUpdate(this._videoRef);
        }}/>

        <button type="button" className="player__exit" onClick={() => this.handleExitButtonClick(this.movie.id)}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100"></progress>
              <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{timeElapsed}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={onPlayButtonClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={isPlayingMovie ? `#pause` : `#play-s`}></use>
              </svg>
              <span>{isPlayingMovie ? `Pause` : `Play`}</span>
            </button>
            <div className="player__name">{this.movie.name}</div>

            <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullScreenButtonClick: PropTypes.func.isRequired,
  isPlayingMovie: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  timeElapsed: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  onTimeUpdate: PropTypes.func.isRequired,
};

export {Player};
export default withRouter(Player);

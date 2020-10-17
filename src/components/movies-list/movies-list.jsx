import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card";
import MovieType from "../../types";
import {withRouter} from "react-router-dom";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: ``,
    };
    this.timeout = null;
    this._handleMouseEnterCard = this._handleMouseEnterCard.bind(this);
    this._handleMouseLeaveCard = this._handleMouseLeaveCard.bind(this);
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleMouseEnterCard(id) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({
        activeMovie: id,
      });
    }, 1000);
  }

  _handleMouseLeaveCard() {
    clearTimeout(this.timeout);
    this.setState({
      activeMovie: ``,
    });
  }

  _handleCardClick(id) {
    this.props.history.push(`/films/${id}`);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const {movies} = this.props;

    return (
      <React.Fragment>
        {
          movies.map((movie, i) => (
            <MovieCard
              key={`movie ${i}`}
              movie={movie}
              onMouseEnterCard={this._handleMouseEnterCard}
              onMouseLeaveCard={this._handleMouseLeaveCard}
              onCardClick={this._handleCardClick}
              isPlaying={movie.id === this.state.activeMovie}
            />
          ))
        }
      </React.Fragment>
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(MovieType).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
};

export default withRouter(MoviesList);

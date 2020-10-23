import React, {PureComponent} from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

const withMoviesList = (Component) => {
  class WithMoviesList extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeMovie: ``,
      };
      this.timeout = null;
      this.handleMouseEnterCard = this.handleMouseEnterCard.bind(this);
      this.handleMouseLeaveCard = this.handleMouseLeaveCard.bind(this);
      this.handleCardClick = this.handleCardClick.bind(this);
    }

    handleMouseEnterCard(id) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.setState({
          activeMovie: id,
        });
      }, 1000);
    }

    handleMouseLeaveCard() {
      clearTimeout(this.timeout);
      this.setState({
        activeMovie: ``,
      });
    }

    handleCardClick(id) {
      this.props.history.push(`/films/${id}`);
    }

    componentWillUnmount() {
      clearTimeout(this.timeout);
    }

    render() {
      return (
        <Component
          {...this.props}
          onMouseEnterCard={this.handleMouseEnterCard}
          onMouseLeaveCard={this.handleMouseLeaveCard}
          onCardClick={this.handleCardClick}
          activeMovie={this.state.activeMovie}
        />
      );
    }
  }

  WithMoviesList.propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
  };

  return withRouter(WithMoviesList);
};

export default withMoviesList;

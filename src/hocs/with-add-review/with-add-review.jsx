import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {MAX_STAR_COUNT} from "../../const";
import {commentPost} from "../../store/api-action";
import PropTypes from "prop-types";

const withAddReview = (Component) => {
  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        stars: new Array(MAX_STAR_COUNT).fill(false),
        rating: `5`,
        review: null,
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(value, i) {
      const {stars} = this.state;

      const userStars = stars.slice(0);
      userStars[i] = value;

      this.setState({
        stars: userStars,
        rating: `${i + 1}`,
      });
    }

    handleTextChange(evt) {
      this.setState(
          {
            review: evt.target.value,
          }
      );
    }

    handleSubmit(filmID) {
      const {onSubmit} = this.props;

      if (this.state.review !== null) {
        onSubmit(filmID, {
          rating: this.state.rating,
          comment: this.state.review,
        });
      }
    }

    render() {
      const {stars: userStars} = this.state;

      return (
        <Component
          {...this.props}
          userStars={userStars}
          onInputChange={this.handleInputChange}
          onTextChange={this.handleTextChange}
          onSubmit={this.handleSubmit}
        />
      );
    }
  }

  WithAddReview.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(filmID, reviewData) {
      dispatch(commentPost(filmID, reviewData));
    }
  });

  return connect(null, mapDispatchToProps)(WithAddReview);
};

export default withAddReview;

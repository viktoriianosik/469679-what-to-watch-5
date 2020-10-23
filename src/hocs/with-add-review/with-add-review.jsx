import React, {PureComponent} from "react";
import {MAX_STAR_COUNT} from "../../const";

const withAddReview = (Component) => {
  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        stars: new Array(MAX_STAR_COUNT).fill(false),
        review: ``,
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleInputChange(value, i) {
      const {stars} = this.state;

      const userStars = stars.slice(0);
      userStars[i] = value;

      this.setState({
        stars: userStars,
      });
    }

    handleTextChange(evt) {
      this.setState(
          {
            review: evt.target.value,
          }
      );
    }

    render() {
      const {stars: userStars} = this.state;

      return (
        <Component
          {...this.props}
          userStars={userStars}
          onInputChange={this.handleInputChange}
          onTextChange={this.handleTextChange}
        />
      );
    }
  }

  return WithAddReview;
};

export default withAddReview;

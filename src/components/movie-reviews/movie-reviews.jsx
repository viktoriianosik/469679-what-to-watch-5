import React, {Fragment} from "react";
import ReviewPropTypes from "./movie-review-props";
import PropTypes from "prop-types";

const renderReview = (review, i) => {
  return (
    <div key={`review-${i}`} className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime={review.date}>{new Date(review.date).toLocaleString(`en-US`, {month: `long`, day: `numeric`, year: `numeric`})}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.rating}</div>
    </div>
  );
};

const MovieReviews = ({reviews}) => {
  return (
    <Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {reviews.map((review, i) => (
            i % 2 === 0 && renderReview(review, i)
          ))}
        </div>
        <div className="movie-card__reviews-col">
          {reviews.map((review, i) => (
            i % 2 !== 0 && renderReview(review, i)
          ))}
        </div>
      </div>
    </Fragment>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropTypes),
};

export default MovieReviews;

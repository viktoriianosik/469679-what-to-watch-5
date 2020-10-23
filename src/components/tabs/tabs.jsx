import React, {Fragment} from "react";
import PropTypes from "prop-types";
import MovieProp from "../../types";
import {TABS} from "../../const";

const Tabs = (props) => {
  const tabs = Object.values(TABS);
  const {movie, activeTab, onTabClick} = props;

  const renderMovieOverview = (movieItem) => {
    return (
      <Fragment>
        <div className="movie-rating">
          <div className="movie-rating__score">{movieItem.rating.score}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{movieItem.rating.level}</span>
            <span className="movie-rating__count">{movieItem.rating.count} ratings</span>
          </p>
        </div>
        <div className="movie-card__text">
          <p>{movie.description}</p>
          <p className="movie-card__director"><strong>Director: {movieItem.director}</strong></p>
          <p className="movie-card__starring"><strong>Starring: {movieItem.starring.slice(0, 4).map((item) => item).join(`, `)}
            {movieItem.starring.length > 4 ? ` and other` : ``}
          </strong></p>
        </div>
      </Fragment>
    );
  };

  const renderMovieDetails = (movieItem) => {
    return (
      <Fragment>
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{movieItem.director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {movieItem.starring.map((item, i) => (
                  movieItem.starring.length - 1 === i ?
                    item :
                    <Fragment key={`starring-${i}`}>
                      {item}, <br />
                    </Fragment>
                ))}
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{movieItem.runTime}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{movieItem.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{movieItem.released}</span>
            </p>
          </div>
        </div>
      </Fragment>
    );
  };

  const renderReview = (review, i) => {
    return (
      <div key={`review-${i}`} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{review.text}</p>
          <footer className="review__details">
            <cite className="review__author">{review.author}</cite>
            <time className="review__date" dateTime={review.date}>{new Date(review.date).toLocaleString(`en-US`, {month: `long`, day: `numeric`, year: `numeric`})}</time>
          </footer>
        </blockquote>
        <div className="review__rating">{review.rating}</div>
      </div>
    );
  };

  const renderMovieReviews = (movieItem) => {
    return (
      <Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {movieItem.reviews.map((review, i) => (
              i % 2 !== 0 && renderReview(review, i)
            ))}
          </div>
          <div className="movie-card__reviews-col">
            {movieItem.reviews.map((review, i) => (
              i % 2 === 0 && renderReview(review, i)
            ))}
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) => (
            <li key={`movie-nav__item-${i}`} className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                evt.preventDefault();
                onTabClick(tab);
              }}>{tab}</a>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === TABS.OVERVIEW && renderMovieOverview(movie)}
      {activeTab === TABS.DETAILS && renderMovieDetails(movie)}
      {activeTab === TABS.REVIEWS && renderMovieReviews(movie)}
    </Fragment>
  );
};

Tabs.propTypes = {
  movie: MovieProp,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default Tabs;

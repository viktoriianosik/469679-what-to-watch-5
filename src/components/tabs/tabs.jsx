import React, {Fragment, PureComponent} from "react";
import MovieProp from "../../types";

const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: TABS.OVERVIEW,
    };
  }

  _handleTabClick(tab) {
    this.setState({
      activeTab: tab,
    });
  }

  _renderMovieOverview(movie) {
    return (
      <Fragment>
        <div className="movie-rating">
          <div className="movie-rating__score">{movie.rating.score}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">{movie.rating.level}</span>
            <span className="movie-rating__count">{movie.rating.count} ratings</span>
          </p>
        </div>
        <div className="movie-card__text">
          <p>{movie.description}</p>
          <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
          <p className="movie-card__starring"><strong>Starring: {movie.starring.slice(0, 4).map((item) => item).join(`, `)}
            {movie.starring.length > 4 ? ` and other` : ``}
          </strong></p>
        </div>
      </Fragment>
    );
  }

  _renderMovieDetails(movie) {
    return (
      <Fragment>
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{movie.director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                {movie.starring.map((item, i) => (
                  movie.starring.length - 1 === i ?
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
              <span className="movie-card__details-value">{movie.runTime}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{movie.genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{movie.released}</span>
            </p>
          </div>
        </div>
      </Fragment>
    );
  }

  _renderMovieReviews(movie) {
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
    return (
      <Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {movie.reviews.map((review, i) => (
              i % 2 !== 0 && renderReview(review, i)
            ))}
          </div>
          <div className="movie-card__reviews-col">
            {movie.reviews.map((review, i) => (
              i % 2 === 0 && renderReview(review, i)
            ))}
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    const tabs = Object.values(TABS);
    const {movie} = this.props;

    return (
      <Fragment>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab, i) => (
              <li key={`movie-nav__item-${i}`} className={`movie-nav__item ${tab === this.state.activeTab ? `movie-nav__item--active` : ``}`}>
                <a href="#" className="movie-nav__link" onClick={(evt) => {
                  evt.preventDefault();
                  this._handleTabClick(tab);
                }}>{tab}</a>
              </li>
            ))}
          </ul>
        </nav>
        {this.state.activeTab === TABS.OVERVIEW && this._renderMovieOverview(movie)}
        {this.state.activeTab === TABS.DETAILS && this._renderMovieDetails(movie)}
        {this.state.activeTab === TABS.REVIEWS && this._renderMovieReviews(movie)}
      </Fragment>
    );
  }
}

Tabs.propTypes = {
  movie: MovieProp,
};

export default Tabs;

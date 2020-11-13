import React, {Fragment} from "react";
import PropTypes from "prop-types";
import MoviePropTypes from "../movie/movie-props";
import ReviewPropTypes from "../movie-reviews/movie-review-props";
import {TABS} from "../../const";
import MovieDetails from "../movie-details/movie-details";
import MovieOverview from "../movie-overview/movie-overview";
import MovieReviews from "../movie-reviews/movie-reviews";
import {connect} from "react-redux";

const Tabs = (props) => {
  const tabs = Object.values(TABS);
  const {movie, reviews, activeTab, onTabClick} = props;

  return (
    <Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) => (
            <li key={`movie-nav__item-${i}`} className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={(evt) => {
                evt.preventDefault();
                onTabClick(tab, movie.id);
              }}>{tab}</a>
            </li>
          ))}
        </ul>
      </nav>
      {activeTab === TABS.OVERVIEW && <MovieOverview movie={movie}/>}
      {activeTab === TABS.DETAILS && <MovieDetails movie={movie}/>}
      {activeTab === TABS.REVIEWS && <MovieReviews reviews={reviews}/>}
    </Fragment>
  );
};

Tabs.propTypes = {
  movie: MoviePropTypes,
  reviews: PropTypes.arrayOf(ReviewPropTypes).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  reviews: DATA.reviews,
});

export default connect(mapStateToProps)(Tabs);

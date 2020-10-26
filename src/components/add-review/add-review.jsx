import React from "react";
import PropTypes from "prop-types";
import MovieType from "../../types";
import {Link, withRouter} from "react-router-dom";

const AddReview = (props) => {
  const {match: {params: {id}}, movies, userStars, onInputChange, onTextChange} = props;
  const movie = movies[id];

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.picture} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${movie.id}`} className="breadcrumbs__link">{movie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.picture} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >
          <div className="rating">
            <div className="rating__stars">
              {userStars.map((userStar, i) => (
                <React.Fragment key={`star-${i + 1}`}>
                  <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={i + 1}
                    checked={userStar[i]}
                    onChange={(evt) => {
                      const value = evt.target.checked;
                      onInputChange(value, i);
                    }}
                  />
                  <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text" id="review-text"
              placeholder="Review text"
              onChange={(evt) => onTextChange(evt)}
            >
            </textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );

};

AddReview.propTypes = {
  movies: PropTypes.arrayOf(MovieType).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  userStars: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default withRouter(AddReview);

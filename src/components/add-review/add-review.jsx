import React from "react";
import PropTypes from "prop-types";
import MoviePropTypes from "../movie/movie-props";
import {Link, withRouter} from "react-router-dom";
import Header from "../header/header";
import ErrorMessage from "../error-message/error-message";
import {compose} from "redux";
import {connect} from "react-redux";
import {getErrorMessage} from "../../store/selectors";

const AddReview = (props) => {
  const {match: {params: {id}}, movies, userStars, onInputChange, onTextChange, onSubmit, errorMessage} = props;
  const movie = movies.find((item) => item.id === parseInt(id, 10));

  return (
    <section className="movie-card movie-card--full" style={{background: `${movie.backgroundColor}`}}>
      {errorMessage.length !== 0 && <ErrorMessage message={errorMessage}/>}
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={movie.backgroundImage} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header>
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
        </Header>
        <div className="movie-card__poster movie-card__poster--small">
          <img src={movie.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={(evt) => {
            evt.preventDefault();
            onSubmit(movie.id);
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
              minLength="50"
              maxLength="400"
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
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
  userStars: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  errorMessage: getErrorMessage(state),
});

export default compose(withRouter, connect(mapStateToProps))(AddReview);

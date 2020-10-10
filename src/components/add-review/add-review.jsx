import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieType from "../../types";
import {Link, withRouter} from "react-router-dom";

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      stars: [false, false, false, false, false],
      review: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  handleReviewChange(evt) {
    this.setState(
        {
          review: evt.target.value,
        }
    );
  }

  render() {
    const {match: {params: {id}}, movies} = this.props;
    const movie = movies[id];
    const {stars: userStars} = this.state;

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
          <form action="#" className="add-review__form" onSubmit={this.handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {userStars.map((userStar, i) => (
                  <React.Fragment key={`star-${i + 1}`}>
                    <input className="rating__input" id={`star-${i + 1}`} type="radio" name="rating" value={i + 1}
                      checked={userStar[i]}
                      onChange={(evt) => {
                        const value = evt.target.checked;

                        this.setState({
                          stars: [...userStars.slice(0, i), value, ...userStars.slice(i + 1)],
                        });
                      }}
                    />
                    <label className="rating__label" htmlFor={`star-${i + 1}`}>Rating {i + 1}</label>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={this.handleReviewChange}></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

AddReview.propTypes = {
  movies: PropTypes.arrayOf(MovieType).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired,
};

export default withRouter(AddReview);

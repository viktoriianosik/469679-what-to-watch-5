import React from "react";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../store/selectors";
import {AuthorizationStatus} from "../../const";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Header = (props) => {
  const {authorizationStatus, className, children = null} = props;

  return (
    <header className={`page-header ${className}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {children}
      <div className="user-block">
        {authorizationStatus === AuthorizationStatus.AUTH
          ? <Link to={`/mylist`}>
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </Link>
          : <Link to={`/login`} href="sign-in.html" className="user-block__link">Sign in</Link>
        }
      </div>
    </header>
  );
};

Header.defaultProps = {
  className: `movie-card__head`,
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  className: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {Header};
export default connect(mapStateToProps)(Header);

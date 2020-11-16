import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({message}) => {
  return (
    <div style={{
      position: `absolute`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      width: `100%`,
      height: `70px`,
      background: `red`,
      color: `white`,
      zIndex: `100`
    }}>
      {message}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;

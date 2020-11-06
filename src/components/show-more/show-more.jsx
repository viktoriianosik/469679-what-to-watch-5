import React from "react";
import PropTypes from "prop-types";

const ShowMore = (props) => {
  const {onMoreButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onMoreButtonClick}
      >
        Show more
      </button>
    </div>
  );
};

ShowMore.propTypes = {
  onMoreButtonClick: PropTypes.func.isRequired,
};

export default ShowMore;

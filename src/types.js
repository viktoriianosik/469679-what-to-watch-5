import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  runTime: PropTypes.string.isRequired,
  starring: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired
}).isRequired;


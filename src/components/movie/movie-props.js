import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  poster_image: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  background_color: PropTypes.string.isRequired,
  poster_image: PropTypes.string.isRequired,
  video_link: PropTypes.string.isRequired,
  preview_video_link: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  run_time: PropTypes.number.isRequired,
  starring: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scores_count: PropTypes.number.isRequired,
}).isRequired;

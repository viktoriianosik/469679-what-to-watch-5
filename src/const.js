export const MAX_STAR_COUNT = 5;
export const SIMILAR_MOVIES_COUNT = 4;
export const MOVIES_COUNT = 8;

export const TABS = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const Rating = {
  BAD: {
    type: `Bad`,
    ratingIntervalStart: 0,
    ratingIntervalEnd: 2,
  },
  NORMAL: {
    type: `Normal`,
    ratingIntervalStart: 3,
    ratingIntervalEnd: 5,
  },
  GOOD: {
    type: `Good`,
    ratingIntervalStart: 5,
    ratingIntervalEnd: 8,
  },
  VERY_GOOD: {
    type: `Very good`,
    ratingIntervalStart: 8,
    ratingIntervalEnd: 10,
  },
  AWESOME: {
    type: `Awesome`,
    ratingIntervalStart: 10,
    ratingIntervalEnd: 10,
  },
};

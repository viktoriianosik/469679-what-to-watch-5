import {Rating} from "./const";

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const convertRatingToLevel = (rating) => {
  return Object.values(Rating).map((rate) => {
    if (rating >= rate.ratingIntervalStart && rating < rate.ratingIntervalEnd) {
      return rate.type;
    }

    return ``;
  });
};

export const getTimeFromMins = (minutes) => {
  return Math.floor(minutes / 60) + `h ` + minutes % 60 + `m`;
};

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

export const convertMovieProps = (movie) => {
  const newFilms = extend(movie, {
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    backgroundImage: movie.background_image,
    backgroundColor: movie.background_color,
    videoLink: movie.video_link,
    previewVideoLink: movie.preview_video_link,
    scoresCount: movie.scores_count,
    runTime: movie.run_time,
    isFavorite: movie.is_favorite,
  });

  return newFilms;
};

export const toCamelCase = (item) => {
  return item.replace(/([-_][a-z])/ig, (i) => {
    return i.toUpperCase()
      .replace(`-`, ``)
      .replace(`_`, ``);
  });
};

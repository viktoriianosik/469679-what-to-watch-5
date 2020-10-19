export const filterByGenre = (genre, movies) => {
  if (genre === `All genres`) {
    return movies;
  } else {
    return movies.filter((movie) => movie.genre === genre);
  }
};

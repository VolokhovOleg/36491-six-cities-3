const MAX_RATING_AMOUNT = 5;

const convertRating = (rating) => `${rating / MAX_RATING_AMOUNT * 100}%`;
const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {convertRating, extend};

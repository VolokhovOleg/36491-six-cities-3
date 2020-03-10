const MAX_RATING_AMOUNT = 5;
const TWO_YEARS_IN_MS = 56799360000;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateBoolean = () => Boolean(Math.round(Math.random()));
const convertRating = (rating) => `${rating / MAX_RATING_AMOUNT * 100}%`;
const generateRandomDate = () => new Date(Date.now() + getRandomInt(0, -TWO_YEARS_IN_MS));
const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {getRandomInt, generateBoolean, convertRating, generateRandomDate, extend};

const MAX_RATING_AMOUNT = 5;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateBoolean = () => Boolean(Math.round(Math.random()));
const convertRating = (rating) => `${rating / MAX_RATING_AMOUNT * 100}%`;

export {getRandomInt, generateBoolean, convertRating};

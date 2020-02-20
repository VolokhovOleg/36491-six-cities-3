const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateBoolean = () => Boolean(Math.round(Math.random()));

export {getRandomInt, generateBoolean};

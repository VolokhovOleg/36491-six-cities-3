import {generateBoolean, getRandomInt} from '../utils';

const placeCards = [
  {
    link: `/`,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ][getRandomInt(0, 2)],
    price: `€${[getRandomInt(120, 9999)]}`,
    title: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ][getRandomInt(0, 3)],
    type: [
      `Apartment`,
      `Private room`,
    ][getRandomInt(0, 1)],
    isPremium: generateBoolean(),
  },
  {
    link: `/`,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ][getRandomInt(0, 2)],
    price: `€${[getRandomInt(120, 9999)]}`,
    title: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ][getRandomInt(0, 3)],
    type: [
      `Apartment`,
      `Private room`,
    ][getRandomInt(0, 1)],
    isPremium: generateBoolean(),
  },
  {
    link: `/`,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ][getRandomInt(0, 2)],
    price: `€${[getRandomInt(120, 9999)]}`,
    title: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ][getRandomInt(0, 3)],
    type: [
      `Apartment`,
      `Private room`,
    ][getRandomInt(0, 1)],
    isPremium: generateBoolean(),
  },
  {
    link: `/`,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ][getRandomInt(0, 2)],
    price: `€${[getRandomInt(120, 9999)]}`,
    title: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ][getRandomInt(0, 3)],
    type: [
      `Apartment`,
      `Private room`,
    ][getRandomInt(0, 1)],
    isPremium: generateBoolean(),
  },
];

export {placeCards};

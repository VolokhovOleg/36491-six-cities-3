import {getRandomInt} from '../utils';

export const reviews = [
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: getRandomInt(1, 5),
    userName: `Max`,
    date: `December 24, 2018`,
    id: `1`,
  },
  {
    text: `The building is green and from 18th century.`,
    userRate: getRandomInt(1, 5),
    userName: `Max`,
    date: `July 11, 2018`,
    id: `2`,
  },
  {
    text: `The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: getRandomInt(1, 5),
    userName: `Max`,
    date: `May 14, 2018`,
    id: `3`,
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userRate: getRandomInt(1, 5),
    userName: `Max`,
    date: `April 24, 2019`,
    id: `4`,
  },
];

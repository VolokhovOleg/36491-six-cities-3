import moment from 'moment';

export const reviews = [
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: 4,
    userName: `Max`,
    date: moment(new Date()).format(`MMMM YYYY`),
    id: `1`,
  },
  {
    text: `The building is green and from 18th century.`,
    userRate: 3,
    userName: `Max`,
    date: moment(new Date()).format(`MMMM YYYY`),
    id: `2`,
  },
  {
    text: `The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: 2,
    userName: `Max`,
    date: moment(new Date()).format(`MMMM YYYY`),
    id: `3`,
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userRate: 1,
    userName: `Max`,
    date: moment(new Date()).format(`MMMM YYYY`),
    id: `4`,
  },
];

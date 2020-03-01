import ReviewList from './review-list';

const reviews = [
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: 4,
    userName: `Max`,
    date: `December 24, 2018`,
    id: `1`,
  },
  {
    text: `The building is green and from 18th century.`,
    userRate: 3,
    userName: `Max`,
    date: `July 11, 2018`,
    id: `2`,
  },
  {
    text: `The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: 2,
    userName: `Max`,
    date: `May 14, 2018`,
    id: `3`,
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userRate: 1,
    userName: `Max`,
    date: `April 24, 2019`,
    id: `4`,
  },
];

it(`<ReviewList /> snapshot`, () => {
  const tree = renderer
    .create(<ReviewList
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

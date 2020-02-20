import PlaceList from './place-list';

const placeCards = [
  {
    link: `/`,
    img: `img/apartment-01.jpg`,
    price: `€120`,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isPremium: true,
  },
  {
    link: `/`,
    img: `img/apartment-01.jpg`,
    price: `€120`,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isPremium: true,
  },
  {
    link: `/`,
    img: `img/apartment-01.jpg`,
    price: `€120`,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isPremium: true,
  },
  {
    link: `/`,
    img: `img/apartment-01.jpg`,
    price: `€120`,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    isPremium: true,
  },
];

it(`<PlaceList /> snapshot`, () => {
  const tree = renderer
    .create(<PlaceList
      placeCards = {placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

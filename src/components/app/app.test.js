import App from './app';

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

it(`<App /> snapshot`, () => {
  const tree = renderer
    .create(<App
      placeCards = {placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

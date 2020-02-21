import Main from "./main";

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

const placesToStay = 312;

it(`<Main /> snapshot`, () => {
  const tree = renderer
    .create(<Main
      placesToStay = {placesToStay}
      placeCards = {placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

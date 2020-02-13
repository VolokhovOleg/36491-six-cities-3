import Main from "./main";

const placeCards = [
  `Wood at great location`,
  `Wood location place`,
  `Nice, big location apartment`,
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

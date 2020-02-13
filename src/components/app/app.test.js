import App from './app';

const placeCards = [
  `Wood at great location`,
  `Wood location place`,
  `Nice, big location apartment`,
];

it(`<App /> snapshot`, () => {
  const tree = renderer
    .create(<App
      placeCards = {placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import Main from './main';

const placeCards = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        placesToStay = {312}
        placeCards = {placeCards}
        onTitleClick = {onTitleClick}
      />
  );

  main.find(`.place-card__name a`).map((item) => {
    item.props().onClick();
    return expect(onTitleClick.mock.calls.length).toBe(1);
  });
});

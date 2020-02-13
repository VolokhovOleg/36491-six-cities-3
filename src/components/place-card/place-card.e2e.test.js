import PlaceCard from './place-card';

it(`Should title be pressed`, () => {
  const placeCardTitle = `Beautiful & luxurious apartment at great location`;
  const onTitleClick = jest.fn();

  const main = shallow(
      <PlaceCard
        placesTitle = {placeCardTitle}
        onTitleClick = {onTitleClick}
      />
  );

  const cardTitle = main.find(`.place-card__name a`);

  cardTitle.props().onClick();
  expect(onTitleClick.mock.calls.length).toBe(1);
});

import PlaceCard from './place-card';

const placeData = {
  link: `/`,
  img: `img/apartment-01.jpg`,
  price: `€120`,
  title: `Nice, cozy, warm big bed apartment`,
  type: `Apartment`,
  isPremium: true,
};

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();
  const onHoverPlace = jest.fn();

  const main = shallow(
      <PlaceCard
        placeData = {placeData}
        onTitleClick = {onTitleClick}
        onHoverPlace= {onHoverPlace}
      />
  );

  const cardTitle = main.find(`.place-card__name a`);

  cardTitle.props().onClick();

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Should card be hovered`, () => {
  const onTitleClick = jest.fn();
  const onHoverPlace = jest.fn();

  const main = shallow(
      <PlaceCard
        placeData = {placeData}
        onTitleClick = {onTitleClick}
        onHoverPlace= {onHoverPlace}
      />
  );

  const card = main.find(`.place-card`);

  card.simulate(`mouseenter`);
  expect(onHoverPlace.mock.calls[0][0]).toMatchObject(placeData);
});

it(`Should card be leaved`, () => {
  const onTitleClick = jest.fn();
  const onHoverPlace = jest.fn();

  const main = shallow(
      <PlaceCard
        placeData = {placeData}
        onTitleClick = {onTitleClick}
        onHoverPlace= {onHoverPlace}
      />
  );

  const card = main.find(`.place-card`);

  card.simulate(`mouseleave`);
  expect(onHoverPlace).toBeCalledWith(null);
});

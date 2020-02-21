import PlaceCard from './place-card';

const placeData = {
  link: `/`,
  img: `img/apartment-01.jpg`,
  price: `€120`,
  title: `Nice, cozy, warm big bed apartment`,
  type: `Apartment`,
  isPremium: true,
};
const titleClickHandler = () => {};
const onHoverPlaceHandler = () => {};

it(`<PlaceCard /> snapshot`, () => {
  const tree = renderer
    .create(<PlaceCard
      onTitleClick={titleClickHandler}
      onHoverPlace={onHoverPlaceHandler}
      placeData = {placeData}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import PlaceCard from './place-card';

const placeTitle = `Wood at great location`;
const titleClickHandler = () => {};

it(`<PlaceCard /> snapshot`, () => {
  const tree = renderer
    .create(<PlaceCard
      onTitleClick={titleClickHandler}
      placesTitle = {placeTitle}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

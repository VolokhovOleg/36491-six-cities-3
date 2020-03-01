import PlaceCard from './place-card';

const host = {
  avatar: `img/avatar-angelina.jpg`,
  name: `Angelina`,
  hostTitle: `Meet the host`,
  hostDescription: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
  ],
};

const placeData = {
  link: `/`,
  img: `img/apartment-01.jpg`,
  gallery: [
    {
      galleryImg: `img/apartment-01.jpg`,
      galleryTitle: `Photo apartment`,
    },
    {
      galleryImg: `img/apartment-02.jpg`,
      galleryTitle: `Photo apartment`,
    },
    {
      galleryImg: `img/apartment-03.jpg`,
      galleryTitle: `Photo apartment`,
    },
    {
      galleryImg: `img/room.jpg`,
      galleryTitle: `Photo room`,
    },
    {
      galleryImg: `img/studio-01.jpg`,
      galleryTitle: `Photo studio`,
    }
  ],
  price: `€120`,
  title: `Beautiful & luxurious apartment at great location`,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  type: `Apartment`,
  bedrooms: 4,
  maxAdults: 4,
  inside: [
    `Wifi`,
    `Heating`,
    `Kitchen`,
    `Cable TV`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Dishwasher`
  ],
  isPremium: true,
  rating: 4,
  locations: [52.3909553943508, 4.85309666406198],
  host,
};

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();
  const onHoverPlace = jest.fn();

  const main = shallow(
      <PlaceCard
        placeData = {placeData}
        isDetailsPage={true}
        onTitleClick = {onTitleClick}
        onHoverPlace= {onHoverPlace}
      />
  );

  const cardTitle = main.find(`.place-card__name a`);

  cardTitle.simulate(`click`, {preventDefault() {}});

  expect(onTitleClick.mock.calls.length).toBe(1);
});

it(`Should card be hovered`, () => {
  const onTitleClick = jest.fn();
  const onHoverPlace = jest.fn();

  const main = shallow(
      <PlaceCard
        placeData = {placeData}
        isDetailsPage={true}
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
        isDetailsPage={true}
        placeData = {placeData}
        onTitleClick = {onTitleClick}
        onHoverPlace= {onHoverPlace}
      />
  );

  const card = main.find(`.place-card`);

  card.simulate(`mouseleave`);
  expect(onHoverPlace).toBeCalledWith(null);
});

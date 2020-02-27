import CardDetail from './card-detail';

const host = {
  avatar: `img/avatar-angelina.jpg`,
  name: `Angelina`,
  hostTitle: `Meet the host`,
  hostDescription: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
  ],
};
const reviews = [
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: 4,
    userName: `Max`,
    date: `December 24, 2018`,
    id: `1`,
  },
  {
    text: `The building is green and from 18th century.`,
    userRate: 3,
    userName: `Max`,
    date: `July 11, 2018`,
    id: `2`,
  },
  {
    text: `The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: 2,
    userName: `Max`,
    date: `May 14, 2018`,
    id: `3`,
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userRate: 1,
    userName: `Max`,
    date: `April 24, 2019`,
    id: `4`,
  },
];
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
  host,
};
const placeCards = [
  {
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
    host,
  },
  {
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
    host,
  },
  {
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
    host,
  },
  {
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
    host,
  },
];

const onTitleClick = ()=>{};

it(`<CardDetail /> snapshot`, () => {
  const tree = renderer
    .create(<CardDetail
      placeData = {placeData}
      placeCards = {placeCards.slice(0, 3)}
      onTitleClick={onTitleClick}
      reviews = {reviews}
    />,
    {createNodeMock: () => document.createElement(`section`)})
    .toJSON();

  expect(tree).toMatchSnapshot();
});

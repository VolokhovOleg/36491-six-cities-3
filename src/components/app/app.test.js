import App from './app';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import moment from 'moment';

const mockStore = configureStore([]);

const host = {
  avatar: `img/avatar-angelina.jpg`,
  name: `Angelina`,
  hostTitle: `Meet the host`,
  hostDescription: [
    `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`
  ],
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
    city: `Amsterdam`,
    locations: [52.3909553943508, 4.85309666406198],
    host,
  },
  {
    link: `/`,
    city: `Amsterdam`,
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
    locations: [51.3909553943508, 4.85309666406198],
    host,
  },
  {
    link: `/`,
    city: `Amsterdam`,
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
    locations: [53.3909553943508, 4.85309666406198],
    host,
  },
  {
    link: `/`,
    city: `Amsterdam`,
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
    locations: [54.3909553943508, 4.85309666406198],
    host,
  },
];
export const reviews = [
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: 4,
    userName: `Max`,
    date: moment(new Date()).format(`MMMM YYYY`),
    id: `1`,
  },
  {
    text: `The building is green and from 18th century.`,
    userRate: 3,
    userName: `Max`,
    date: moment(new Date()).format(`MMMM YYYY`),
    id: `2`,
  },
  {
    text: `The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    userRate: 2,
    userName: `Max`,
    date: moment(new Date()).format(`MMMM YYYY`),
    id: `3`,
  },
  {
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    userRate: 1,
    userName: `Max`,
    date: moment(new Date()).format(`MMMM YYYY`),
    id: `4`,
  },
];
const activeCity = `Moscow`;
const cardDetail = {
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
  city: `Amsterdam`,
  locations: [52.3909553943508, 4.85309666406198],
  host,
};
const hoverPlace = {
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
  city: `Amsterdam`,
  locations: [52.3909553943508, 4.85309666406198],
  host,
};

it(`<App /> snapshot`, () => {
  const store = mockStore({
    isRenderCardDetail: false,
    activeCity,
    cardDetail,
    hoverPlace,
    placeCards,
    reviews,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />,
        </Provider>,
        {createNodeMock: () => document.createElement(`section`)}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

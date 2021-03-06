import Main from './main';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {reviews} from '../app/app.test';

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
const activeCity = `Mock City`;
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
    price: `€1201`,
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
    rating: 1,
    city: `Moscow`,
    locations: [52.3919553943508, 4.85319666406198],
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
    price: `€1202`,
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
    rating: 2,
    locations: [51.3929553943508, 4.85329666406198],
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
    price: `€1203`,
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
    rating: 3,
    locations: [53.3939553943508, 4.85339666406198],
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
    price: `€1204`,
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
const originPlaceCards = [
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
const placesToStay = 312;
const activePin = [52.3909553943508, 4.85309666406198];

it(`<Main /> snapshot`, () => {
  const store = mockStore({
    isRenderCardDetail: false,
    activeCity,
    cardDetail,
    hoverPlace,
    placeCards,
    originPlaceCards,
    activePin,
    reviews,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            placesToStay = {placesToStay}
            onTitleClick={()=>{}}
            onCityClick={()=>{}}
            onHoverPlace={()=>{}}
            activeCity={activeCity}
            placeCards = {placeCards}
          />,
        </Provider>,
        {createNodeMock: () => document.createElement(`section`)}
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

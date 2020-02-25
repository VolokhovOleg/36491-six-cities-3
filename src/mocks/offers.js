import {generateBoolean, getRandomInt} from '../utils';

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
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
    ][getRandomInt(0, 4)],
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
    ].slice(getRandomInt(0, 2), getRandomInt(3, 5)),
    price: `€${[getRandomInt(120, 9999)]}`,
    title: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ][getRandomInt(0, 3)],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      `The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera.`,
      `An independent House, strategically located between Rembrand Square and National Opera. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    ][getRandomInt(0, 3)],
    type: [
      `Apartment`,
      `Private room`,
      `House`,
      `Hotel`,
    ][getRandomInt(0, 3)],
    bedrooms: getRandomInt(0, 5),
    maxAdults: getRandomInt(1, 5),
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
    ].slice(getRandomInt(0, 5), getRandomInt(6, 10)),
    isPremium: generateBoolean(),
    rating: getRandomInt(1, 5),
    host,
  },
  {
    link: `/`,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
    ][getRandomInt(0, 4)],
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
    ].slice(getRandomInt(0, 2), getRandomInt(3, 5)),
    price: `€${[getRandomInt(120, 9999)]}`,
    title: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ][getRandomInt(0, 3)],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      `The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera.`,
      `An independent House, strategically located between Rembrand Square and National Opera. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    ][getRandomInt(0, 3)],
    type: [
      `Apartment`,
      `Private room`,
      `House`,
      `Hotel`,
    ][getRandomInt(0, 3)],
    bedrooms: getRandomInt(0, 5),
    maxAdults: getRandomInt(1, 5),
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
    ].slice(getRandomInt(0, 5), getRandomInt(6, 10)),
    isPremium: generateBoolean(),
    rating: getRandomInt(1, 5),
    host,
  },
  {
    link: `/`,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
    ][getRandomInt(0, 4)],
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
    ].slice(getRandomInt(0, 2), getRandomInt(3, 5)),
    price: `€${[getRandomInt(120, 9999)]}`,
    title: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ][getRandomInt(0, 3)],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      `The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera.`,
      `An independent House, strategically located between Rembrand Square and National Opera. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    ][getRandomInt(0, 3)],
    type: [
      `Apartment`,
      `Private room`,
      `House`,
      `Hotel`,
    ][getRandomInt(0, 3)],
    bedrooms: getRandomInt(0, 5),
    maxAdults: getRandomInt(1, 5),
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
    ].slice(getRandomInt(0, 5), getRandomInt(6, 10)),
    isPremium: generateBoolean(),
    rating: getRandomInt(1, 5),
    host,
  },
  {
    link: `/`,
    img: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/room.jpg`,
      `img/studio-01.jpg`,
    ][getRandomInt(0, 4)],
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
    ].slice(getRandomInt(0, 2), getRandomInt(3, 5)),
    price: `€${[getRandomInt(120, 9999)]}`,
    title: [
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
    ][getRandomInt(0, 3)],
    description: [
      `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
      `The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera.`,
      `An independent House, strategically located between Rembrand Square and National Opera. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    ][getRandomInt(0, 3)],
    type: [
      `Apartment`,
      `Private room`,
      `House`,
      `Hotel`,
    ][getRandomInt(0, 3)],
    bedrooms: getRandomInt(0, 5),
    maxAdults: getRandomInt(1, 5),
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
    ].slice(getRandomInt(0, 5), getRandomInt(6, 10)),
    isPremium: generateBoolean(),
    rating: getRandomInt(1, 5),
    host,
  },
];

export {placeCards};

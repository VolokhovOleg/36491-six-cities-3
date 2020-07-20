import App from './app';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space';

const mockStore = configureStore([]);

it(`<App /> snapshot`, () => {
  const store = mockStore({
    [NameSpace.HOTELS]: {
      cardDetailsID: null,
      placeCards: [
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`
          ],
          price: 886,
          title: `The Pondhouse - A Magical Place`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 3,
          maxAdults: 6,
          inside: [
            `Breakfast`,
            `Washer`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 4.2,
          locations: [
            52.385540000000006,
            4.886976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 1
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`
          ],
          price: 141,
          title: `Amazing and Extremely Central Flat`,
          description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 3,
          inside: [
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Baby seat`,
            `Breakfast`,
            `Towels`,
            `Washer`
          ],
          isPremium: false,
          rating: 2.9,
          locations: [
            51.237402,
            6.779314
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
            isPro: true
          },
          isFavorite: false,
          id: 2
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`
          ],
          price: 793,
          title: `Wood and stone place`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `house`,
          bedrooms: 2,
          maxAdults: 5,
          inside: [
            `Towels`,
            `Washing machine`,
            `Baby seat`,
            `Air conditioning`,
            `Coffee machine`,
            `Breakfast`,
            `Washer`,
            `Laptop friendly workspace`,
            `Dishwasher`,
            `Fridge`
          ],
          isPremium: false,
          rating: 4.3,
          locations: [
            50.822556999999996,
            4.347697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 3
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`
          ],
          price: 119,
          title: `Waterfront with extraordinary view`,
          description: `This is a place for dreamers to reset, reflect, and create. Designed with a \`slow\` pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
          type: `hotel`,
          bedrooms: 5,
          maxAdults: 9,
          inside: [
            `Dishwasher`,
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Breakfast`,
            `Fridge`,
            `Washer`,
            `Towels`,
            `Baby seat`
          ],
          isPremium: false,
          rating: 3.1,
          locations: [
            51.237402,
            6.797314
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `This is a place for dreamers to reset, reflect, and create. Designed with a \`slow\` pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
            isPro: true
          },
          isFavorite: false,
          id: 4
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`
          ],
          price: 448,
          title: `Loft Studio in the Central Area`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 2,
          maxAdults: 9,
          inside: [
            `Baby seat`,
            `Laptop friendly workspace`,
            `Washer`,
            `Air conditioning`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 4.4,
          locations: [
            50.862556999999995,
            4.375697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 5
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`
          ],
          price: 195,
          title: `The house among olive `,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `hotel`,
          bedrooms: 2,
          maxAdults: 9,
          inside: [
            `Baby seat`,
            `Towels`,
            `Laptop friendly workspace`,
            `Fridge`,
            `Breakfast`,
            `Washer`,
            `Air conditioning`
          ],
          isPremium: false,
          rating: 3.7,
          locations: [
            50.945361,
            6.962974
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 6
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`
          ],
          price: 193,
          title: `Nice, cozy, warm big bed apartment`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Washer`,
            `Baby seat`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 5,
          locations: [
            52.37154,
            4.889976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
            isPro: true
          },
          isFavorite: false,
          id: 7
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`
          ],
          price: 666,
          title: `The Pondhouse - A Magical Place`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `house`,
          bedrooms: 5,
          maxAdults: 9,
          inside: [
            `Laptop friendly workspace`,
            `Baby seat`,
            `Fridge`,
            `Air conditioning`,
            `Washer`,
            `Breakfast`,
            `Towels`
          ],
          isPremium: false,
          rating: 2.9,
          locations: [
            52.370540000000005,
            4.9099759999999995
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 8
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`
          ],
          price: 377,
          title: `Waterfront with extraordinary view`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `house`,
          bedrooms: 4,
          maxAdults: 5,
          inside: [
            `Towels`,
            `Laptop friendly workspace`,
            `Fridge`,
            `Breakfast`,
            `Air conditioning`,
            `Dishwasher`,
            `Baby seat`,
            `Washer`
          ],
          isPremium: false,
          rating: 2.3,
          locations: [
            53.565341,
            9.980654000000001
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 9
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`
          ],
          price: 120,
          title: `The Pondhouse - A Magical Place`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          type: `house`,
          bedrooms: 1,
          maxAdults: 8,
          inside: [
            `Washer`,
            `Breakfast`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 2.5,
          locations: [
            51.204402,
            6.7773140000000005
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
            isPro: true
          },
          isFavorite: false,
          id: 10
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`
          ],
          price: 180,
          title: `Nice, cozy, warm big bed apartment`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `hotel`,
          bedrooms: 4,
          maxAdults: 5,
          inside: [
            `Washing machine`,
            `Washer`,
            `Laptop friendly workspace`,
            `Coffee machine`,
            `Fridge`,
            `Towels`,
            `Dishwasher`,
            `Breakfast`,
            `Air conditioning`,
            `Baby seat`
          ],
          isPremium: false,
          rating: 2.7,
          locations: [
            53.540341000000005,
            10.025654000000001
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 11
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`
          ],
          price: 310,
          title: `Canal View Prinsengracht`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 4,
          maxAdults: 4,
          inside: [
            `Laptop friendly workspace`,
            `Coffee machine`,
            `Washing machine`,
            `Fridge`,
            `Washer`,
            `Breakfast`,
            `Dishwasher`,
            `Baby seat`,
            `Air conditioning`,
            `Towels`
          ],
          isPremium: false,
          rating: 4.1,
          locations: [
            53.528341000000005,
            10.018654000000002
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 12
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`
          ],
          price: 962,
          title: `Waterfront with extraordinary view`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `house`,
          bedrooms: 2,
          maxAdults: 2,
          inside: [
            `Breakfast`,
            `Laptop friendly workspace`,
            `Washer`
          ],
          isPremium: true,
          rating: 3.1,
          locations: [
            53.558341000000006,
            10.001654
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 13
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`
          ],
          price: 154,
          title: `Waterfront with extraordinary view`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 4,
          maxAdults: 4,
          inside: [
            `Baby seat`,
            `Laptop friendly workspace`,
            `Breakfast`,
            `Air conditioning`,
            `Washer`,
            `Towels`
          ],
          isPremium: false,
          rating: 2.8,
          locations: [
            48.837610000000005,
            2.3454990000000002
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 14
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`
          ],
          price: 384,
          title: `Perfectly located Castro`,
          description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
          type: `hotel`,
          bedrooms: 2,
          maxAdults: 7,
          inside: [
            `Washer`,
            `Breakfast`,
            `Laptop friendly workspace`
          ],
          isPremium: true,
          rating: 4.9,
          locations: [
            50.932361,
            6.937974
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
            isPro: true
          },
          isFavorite: false,
          id: 15
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`
          ],
          price: 473,
          title: `Penthouse, 4-5 rooms + 5 balconies`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 9,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 4.6,
          locations: [
            50.867557,
            4.339697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 16
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`
          ],
          price: 176,
          title: `Canal View Prinsengracht`,
          description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Washer`,
            `Laptop friendly workspace`,
            `Air conditioning`,
            `Breakfast`,
            `Baby seat`,
            `Towels`
          ],
          isPremium: false,
          rating: 4.3,
          locations: [
            50.947361,
            6.9799739999999995
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
            isPro: true
          },
          isFavorite: false,
          id: 17
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`
          ],
          price: 445,
          title: `Wood and stone place`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `hotel`,
          bedrooms: 2,
          maxAdults: 4,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`,
            `Air conditioning`
          ],
          isPremium: false,
          rating: 2.1,
          locations: [
            53.563341,
            10.019654000000001
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 18
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`
          ],
          price: 795,
          title: `Perfectly located Castro`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 3,
          maxAdults: 5,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`
          ],
          isPremium: false,
          rating: 2.4,
          locations: [
            51.235402,
            6.800314
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 19
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`
          ],
          price: 438,
          title: `Wood and stone place`,
          description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
          type: `hotel`,
          bedrooms: 4,
          maxAdults: 8,
          inside: [
            `Breakfast`,
            `Laptop friendly workspace`,
            `Washer`,
            `Air conditioning`,
            `Baby seat`
          ],
          isPremium: false,
          rating: 4.8,
          locations: [
            50.852557,
            4.3376969999999995
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
            isPro: true
          },
          isFavorite: false,
          id: 20
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`
          ],
          price: 344,
          title: `Canal View Prinsengracht`,
          description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          type: `house`,
          bedrooms: 2,
          maxAdults: 6,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`
          ],
          isPremium: false,
          rating: 4.9,
          locations: [
            50.844556999999995,
            4.346697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
            isPro: true
          },
          isFavorite: false,
          id: 21
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`
          ],
          price: 285,
          title: `Penthouse, 4-5 rooms + 5 balconies`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `hotel`,
          bedrooms: 4,
          maxAdults: 8,
          inside: [
            `Breakfast`,
            `Washer`,
            `Laptop friendly workspace`
          ],
          isPremium: true,
          rating: 4.9,
          locations: [
            48.865610000000004,
            2.350499
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 22
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`
          ],
          price: 341,
          title: `Loft Studio in the Central Area`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `hotel`,
          bedrooms: 4,
          maxAdults: 8,
          inside: [
            `Towels`,
            `Washer`,
            `Baby seat`,
            `Air conditioning`,
            `Breakfast`,
            `Laptop friendly workspace`
          ],
          isPremium: true,
          rating: 3.5,
          locations: [
            48.846610000000005,
            2.374499
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 23
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`
          ],
          price: 243,
          title: `The Joshua Tree House`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Breakfast`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 3.3,
          locations: [
            50.869557,
            4.332697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 24
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`
          ],
          price: 280,
          title: `Canal View Prinsengracht`,
          description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Coffee machine`,
            `Washer`,
            `Breakfast`,
            `Dishwasher`,
            `Baby seat`,
            `Laptop friendly workspace`,
            `Towels`,
            `Fridge`,
            `Air conditioning`
          ],
          isPremium: false,
          rating: 4.7,
          locations: [
            50.930361,
            6.937974
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
            isPro: true
          },
          isFavorite: false,
          id: 25
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`
          ],
          price: 194,
          title: `Wood and stone place`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 1,
          inside: [
            `Laptop friendly workspace`,
            `Dishwasher`,
            `Baby seat`,
            `Towels`,
            `Breakfast`,
            `Washer`,
            `Fridge`,
            `Air conditioning`,
            `Coffee machine`
          ],
          isPremium: false,
          rating: 2.6,
          locations: [
            48.868610000000004,
            2.342499
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 26
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`
          ],
          price: 298,
          title: `Amazing and Extremely Central Flat`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 8,
          inside: [
            `Breakfast`,
            `Laptop friendly workspace`,
            `Washer`
          ],
          isPremium: false,
          rating: 5,
          locations: [
            50.833557,
            4.374696999999999
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 27
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`
          ],
          price: 159,
          title: `The house among olive `,
          description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 3,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 2.4,
          locations: [
            51.250402,
            6.7853140000000005
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
            isPro: true
          },
          isFavorite: false,
          id: 28
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`
          ],
          price: 319,
          title: `Penthouse, 4-5 rooms + 5 balconies`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `apartment`,
          bedrooms: 4,
          maxAdults: 5,
          inside: [
            `Air conditioning`,
            `Washer`,
            `Laptop friendly workspace`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 4.6,
          locations: [
            52.35054,
            4.908976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 29
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`
          ],
          price: 301,
          title: `Penthouse, 4-5 rooms + 5 balconies`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `apartment`,
          bedrooms: 2,
          maxAdults: 9,
          inside: [
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 4.4,
          locations: [
            51.232402,
            6.800314
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 30
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`
          ],
          price: 439,
          title: `Perfectly located Castro`,
          description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          type: `apartment`,
          bedrooms: 1,
          maxAdults: 8,
          inside: [
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 2.7,
          locations: [
            53.565341000000004,
            9.978654
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
            isPro: true
          },
          isFavorite: false,
          id: 31
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`
          ],
          price: 283,
          title: `Perfectly located Castro`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `hotel`,
          bedrooms: 3,
          maxAdults: 9,
          inside: [
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Washer`,
            `Breakfast`
          ],
          isPremium: true,
          rating: 3.1,
          locations: [
            50.867557,
            4.371696999999999
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 32
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`
          ],
          price: 153,
          title: `Canal View Prinsengracht`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 8,
          inside: [
            `Laptop friendly workspace`,
            `Fridge`,
            `Towels`,
            `Baby seat`,
            `Breakfast`,
            `Air conditioning`,
            `Washer`,
            `Dishwasher`
          ],
          isPremium: false,
          rating: 2,
          locations: [
            48.83961,
            2.342499
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 33
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`
          ],
          price: 410,
          title: `House in countryside`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 1,
          maxAdults: 6,
          inside: [
            `Breakfast`,
            `Air conditioning`,
            `Washer`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 3.9,
          locations: [
            50.827557,
            4.336697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 34
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`
          ],
          price: 207,
          title: `House in countryside`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Breakfast`,
            `Towels`,
            `Dishwasher`,
            `Washer`,
            `Baby seat`,
            `Fridge`,
            `Air conditioning`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 3.7,
          locations: [
            51.214402,
            6.764314000000001
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 35
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`
          ],
          price: 178,
          title: `Nice, cozy, warm big bed apartment`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 4,
          maxAdults: 9,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`,
            `Air conditioning`,
            `Washer`
          ],
          isPremium: false,
          rating: 2.7,
          locations: [
            51.211402,
            6.756314000000001
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 36
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`
          ],
          price: 779,
          title: `Loft Studio in the Central Area`,
          description: `This is a place for dreamers to reset, reflect, and create. Designed with a \`slow\` pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
          type: `house`,
          bedrooms: 2,
          maxAdults: 9,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 4.2,
          locations: [
            50.945361,
            6.935974
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `This is a place for dreamers to reset, reflect, and create. Designed with a \`slow\` pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
            isPro: true
          },
          isFavorite: false,
          id: 37
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`
          ],
          price: 608,
          title: `Amazing and Extremely Central Flat`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `house`,
          bedrooms: 2,
          maxAdults: 8,
          inside: [
            `Air conditioning`,
            `Washer`,
            `Laptop friendly workspace`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 2.2,
          locations: [
            50.839557,
            4.346697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 38
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`
          ],
          price: 816,
          title: `Penthouse, 4-5 rooms + 5 balconies`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `house`,
          bedrooms: 4,
          maxAdults: 5,
          inside: [
            `Laptop friendly workspace`,
            `Washer`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 3.2,
          locations: [
            52.389540000000004,
            4.883976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 39
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`
          ],
          price: 827,
          title: `The Pondhouse - A Magical Place`,
          description: `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
          type: `house`,
          bedrooms: 4,
          maxAdults: 10,
          inside: [
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Baby seat`,
            `Washer`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 4.4,
          locations: [
            48.87561,
            2.375499
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.`,
            isPro: true
          },
          isFavorite: false,
          id: 40
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`
          ],
          price: 832,
          title: `The Joshua Tree House`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `house`,
          bedrooms: 3,
          maxAdults: 3,
          inside: [
            `Towels`,
            `Air conditioning`,
            `Coffee machine`,
            `Dishwasher`,
            `Washer`,
            `Fridge`,
            `Breakfast`,
            `Baby seat`,
            `Washing machine`,
            `Laptop friendly workspace`
          ],
          isPremium: true,
          rating: 2.4,
          locations: [
            50.854557,
            4.364697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 41
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`
          ],
          price: 283,
          title: `Amazing and Extremely Central Flat`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Washer`,
            `Coffee machine`,
            `Air conditioning`,
            `Towels`,
            `Fridge`,
            `Laptop friendly workspace`,
            `Breakfast`,
            `Baby seat`,
            `Dishwasher`
          ],
          isPremium: false,
          rating: 4.6,
          locations: [
            51.239402000000005,
            6.756314000000001
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 42
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`
          ],
          price: 103,
          title: `Nice, cozy, warm big bed apartment`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 5,
          maxAdults: 7,
          inside: [
            `Towels`,
            `Air conditioning`,
            `Fridge`,
            `Baby seat`,
            `Dishwasher`,
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`,
            `Washing machine`,
            `Coffee machine`
          ],
          isPremium: true,
          rating: 4.5,
          locations: [
            48.877610000000004,
            2.333499
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 43
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`
          ],
          price: 128,
          title: `The house among olive `,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Breakfast`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 3.3,
          locations: [
            53.563341,
            9.975654
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 44
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`
          ],
          price: 445,
          title: `Canal View Prinsengracht`,
          description: `This is a place for dreamers to reset, reflect, and create. Designed with a \`slow\` pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
          type: `house`,
          bedrooms: 2,
          maxAdults: 6,
          inside: [
            `Breakfast`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 2.8,
          locations: [
            51.222402,
            6.786314
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `This is a place for dreamers to reset, reflect, and create. Designed with a \`slow\` pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
            isPro: true
          },
          isFavorite: false,
          id: 45
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`
          ],
          price: 360,
          title: `Penthouse, 4-5 rooms + 5 balconies`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `apartment`,
          bedrooms: 4,
          maxAdults: 9,
          inside: [
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Washer`,
            `Breakfast`,
            `Baby seat`
          ],
          isPremium: false,
          rating: 3.8,
          locations: [
            50.957361,
            6.9509739999999995
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 46
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`
          ],
          price: 618,
          title: `Loft Studio in the Central Area`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `house`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Laptop friendly workspace`,
            `Washer`,
            `Breakfast`
          ],
          isPremium: true,
          rating: 3.9,
          locations: [
            53.528341000000005,
            9.982654
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 47
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`
          ],
          price: 291,
          title: `Perfectly located Castro`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 9,
          inside: [
            `Breakfast`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 3.5,
          locations: [
            52.37554,
            4.9019759999999994
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
            isPro: true
          },
          isFavorite: false,
          id: 48
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`
          ],
          price: 247,
          title: `Perfectly located Castro`,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 3,
          inside: [
            `Dishwasher`,
            `Laptop friendly workspace`,
            `Fridge`,
            `Towels`,
            `Washing machine`,
            `Breakfast`,
            `Cable TV`,
            `Washer`,
            `Coffee machine`,
            `Air conditioning`,
            `Baby seat`
          ],
          isPremium: false,
          rating: 4,
          locations: [
            50.934361,
            6.943974
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 49
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`
          ],
          price: 146,
          title: `Canal View Prinsengracht`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`,
            `Fridge`,
            `Air conditioning`,
            `Towels`,
            `Dishwasher`,
            `Baby seat`
          ],
          isPremium: false,
          rating: 3.1,
          locations: [
            48.843610000000005,
            2.338499
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
            isPro: true
          },
          isFavorite: false,
          id: 50
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`
          ],
          price: 140,
          title: `Amazing and Extremely Central Flat`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 1,
          inside: [
            `Baby seat`,
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`,
            `Towels`,
            `Air conditioning`,
            `Fridge`
          ],
          isPremium: false,
          rating: 3,
          locations: [
            52.36354,
            4.889976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 51
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`
          ],
          price: 272,
          title: `Wood and stone place`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          type: `house`,
          bedrooms: 5,
          maxAdults: 8,
          inside: [
            `Washer`,
            `Breakfast`,
            `Laptop friendly workspace`,
            `Dishwasher`,
            `Air conditioning`,
            `Baby seat`,
            `Fridge`,
            `Towels`
          ],
          isPremium: false,
          rating: 2.9,
          locations: [
            53.538341,
            9.976654000000002
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
            isPro: true
          },
          isFavorite: false,
          id: 52
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`
          ],
          price: 220,
          title: `House in countryside`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 1,
          inside: [
            `Laptop friendly workspace`,
            `Washer`,
            `Breakfast`
          ],
          isPremium: false,
          rating: 2.9,
          locations: [
            52.361540000000005,
            4.883976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 53
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`
          ],
          price: 190,
          title: `Loft Studio in the Central Area`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          type: `hotel`,
          bedrooms: 3,
          maxAdults: 8,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`
          ],
          isPremium: true,
          rating: 3.1,
          locations: [
            50.917361,
            6.977974
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
            isPro: true
          },
          isFavorite: false,
          id: 54
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`
          ],
          price: 451,
          title: `Waterfront with extraordinary view`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 8,
          inside: [
            `Fridge`,
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Dishwasher`,
            `Breakfast`,
            `Towels`,
            `Washer`,
            `Baby seat`
          ],
          isPremium: false,
          rating: 3.3,
          locations: [
            48.84761,
            2.356499
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 55
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`
          ],
          price: 559,
          title: `House in countryside`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 3,
          maxAdults: 9,
          inside: [
            `Breakfast`,
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Washer`
          ],
          isPremium: false,
          rating: 2.2,
          locations: [
            52.36354,
            4.911976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 56
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`
          ],
          price: 215,
          title: `The house among olive `,
          description: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 3,
          inside: [
            `Air conditioning`,
            `Baby seat`,
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`
          ],
          isPremium: false,
          rating: 3.3,
          locations: [
            51.243402,
            6.791314
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.`,
            isPro: true
          },
          isFavorite: false,
          id: 57
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`
          ],
          price: 302,
          title: `House in countryside`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `house`,
          bedrooms: 4,
          maxAdults: 10,
          inside: [
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`
          ],
          isPremium: false,
          rating: 3.2,
          locations: [
            53.555341000000006,
            9.975654
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 58
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`
          ],
          price: 393,
          title: `Waterfront with extraordinary view`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 9,
          inside: [
            `Laptop friendly workspace`,
            `Towels`,
            `Breakfast`,
            `Fridge`,
            `Washer`,
            `Washing machine`,
            `Air conditioning`,
            `Dishwasher`,
            `Baby seat`,
            `Coffee machine`
          ],
          isPremium: false,
          rating: 2.5,
          locations: [
            50.918461,
            6.969974
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 59
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`
          ],
          price: 265,
          title: `Tile House`,
          description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          type: `house`,
          bedrooms: 1,
          maxAdults: 10,
          inside: [
            `Air conditioning`,
            `Baby seat`,
            `Breakfast`,
            `Washer`,
            `Laptop friendly workspace`,
            `Dishwasher`,
            `Fridge`,
            `Towels`
          ],
          isPremium: false,
          rating: 3.5,
          locations: [
            51.248402000000006,
            6.763314
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
            isPro: true
          },
          isFavorite: false,
          id: 60
        },
        {
          city: `Paris`,
          cityMapProps: {
            location: [
              48.85661,
              2.351499
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`
          ],
          price: 435,
          title: `Waterfront with extraordinary view`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          type: `apartment`,
          bedrooms: 2,
          maxAdults: 8,
          inside: [
            `Towels`,
            `Baby seat`,
            `Fridge`,
            `Dishwasher`,
            `Washing machine`,
            `Coffee machine`,
            `Washer`,
            `Air conditioning`,
            `Cable TV`,
            `Breakfast`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 3.8,
          locations: [
            48.834610000000005,
            2.335499
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
            isPro: true
          },
          isFavorite: false,
          id: 61
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`
          ],
          price: 121,
          title: `Waterfront with extraordinary view`,
          description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 3.4,
          locations: [
            52.388540000000006,
            4.899976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
            isPro: true
          },
          isFavorite: false,
          id: 62
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`
          ],
          price: 202,
          title: `The house among olive `,
          description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Breakfast`,
            `Air conditioning`,
            `Laptop friendly workspace`,
            `Washer`,
            `Baby seat`
          ],
          isPremium: false,
          rating: 4.2,
          locations: [
            50.828556999999996,
            4.362697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
            isPro: true
          },
          isFavorite: false,
          id: 63
        },
        {
          city: `Dusseldorf`,
          cityMapProps: {
            location: [
              51.225402,
              6.776314
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`
          ],
          price: 128,
          title: `The house among olive `,
          description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Towels`,
            `Washing machine`,
            `Washer`,
            `Fridge`,
            `Breakfast`,
            `Dishwasher`,
            `Air conditioning`,
            `Coffee machine`,
            `Laptop friendly workspace`,
            `Baby seat`
          ],
          isPremium: true,
          rating: 4,
          locations: [
            51.241402,
            6.782314
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
            isPro: true
          },
          isFavorite: false,
          id: 64
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`
          ],
          price: 149,
          title: `Amazing and Extremely Central Flat`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Laptop friendly workspace`,
            `Breakfast`,
            `Washer`
          ],
          isPremium: false,
          rating: 3.8,
          locations: [
            52.36554,
            4.911976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 65
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`
          ],
          price: 219,
          title: `Perfectly located Castro`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 3,
          inside: [
            `Baby seat`,
            `Breakfast`,
            `Washer`,
            `Laptop friendly workspace`,
            `Air conditioning`,
            `Towels`,
            `Dishwasher`,
            `Fridge`
          ],
          isPremium: false,
          rating: 2.7,
          locations: [
            52.397540000000006,
            4.9099759999999995
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 66
        },
        {
          city: `Cologne`,
          cityMapProps: {
            location: [
              50.938361,
              6.959974
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`
          ],
          price: 415,
          title: `Loft Studio in the Central Area`,
          description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
          type: `hotel`,
          bedrooms: 3,
          maxAdults: 7,
          inside: [
            `Air conditioning`,
            `Breakfast`,
            `Laptop friendly workspace`,
            `Towels`,
            `Fridge`,
            `Dishwasher`,
            `Washer`,
            `Baby seat`,
            `Coffee machine`
          ],
          isPremium: false,
          rating: 3.6,
          locations: [
            50.954361,
            6.982974
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
            isPro: true
          },
          isFavorite: false,
          id: 67
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`
          ],
          price: 899,
          title: `Penthouse, 4-5 rooms + 5 balconies`,
          description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
          type: `house`,
          bedrooms: 3,
          maxAdults: 6,
          inside: [
            `Air conditioning`,
            `Breakfast`,
            `Towels`,
            `Laptop friendly workspace`,
            `Washer`,
            `Baby seat`
          ],
          isPremium: false,
          rating: 4.5,
          locations: [
            50.837557,
            4.339697
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
            isPro: true
          },
          isFavorite: false,
          id: 68
        },
        {
          city: `Brussels`,
          cityMapProps: {
            location: [
              50.846557,
              4.351697
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/15.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`
          ],
          price: 118,
          title: `Tile House`,
          description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
          type: `hotel`,
          bedrooms: 2,
          maxAdults: 3,
          inside: [
            `Baby seat`,
            `Washer`,
            `Breakfast`,
            `Air conditioning`,
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 4.8,
          locations: [
            50.865556999999995,
            4.371696999999999
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
            isPro: true
          },
          isFavorite: false,
          id: 69
        },
        {
          city: `Hamburg`,
          cityMapProps: {
            location: [
              53.550341,
              10.000654
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/3.jpg`
          ],
          price: 260,
          title: `The house among olive `,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 2,
          inside: [
            `Laptop friendly workspace`,
            `Air conditioning`,
            `Towels`,
            `Baby seat`,
            `Dishwasher`,
            `Breakfast`,
            `Coffee machine`,
            `Washer`,
            `Fridge`
          ],
          isPremium: true,
          rating: 2.3,
          locations: [
            53.573341000000006,
            9.994654
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 70
        },
        {
          city: `Amsterdam`,
          cityMapProps: {
            location: [
              52.37454,
              4.897976
            ],
            zoom: 13
          },
          img: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`,
          gallery: [
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/19.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/2.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/16.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/17.jpg`,
            `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`
          ],
          price: 203,
          title: `Nice, cozy, warm big bed apartment`,
          description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
          type: `room`,
          bedrooms: 1,
          maxAdults: 3,
          inside: [
            `Laptop friendly workspace`
          ],
          isPremium: false,
          rating: 4,
          locations: [
            52.367540000000005,
            4.883976
          ],
          host: {
            avatar: `img/avatar-angelina.jpg`,
            name: `Angelina`,
            hostDescription: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
            isPro: true
          },
          isFavorite: false,
          id: 71
        }
      ],
      favoritesCards: [],
      nearPlaces: [],
      reviews: [],
      locations: [
        [
          52.385540000000006,
          4.886976
        ],
        [
          52.37154,
          4.889976
        ],
        [
          52.370540000000005,
          4.9099759999999995
        ],
        [
          52.35054,
          4.908976
        ],
        [
          52.389540000000004,
          4.883976
        ],
        [
          52.37554,
          4.9019759999999994
        ],
        [
          52.36354,
          4.889976
        ],
        [
          52.361540000000005,
          4.883976
        ],
        [
          52.36354,
          4.911976
        ],
        [
          52.388540000000006,
          4.899976
        ],
        [
          52.36554,
          4.911976
        ],
        [
          52.397540000000006,
          4.9099759999999995
        ],
        [
          52.367540000000005,
          4.883976
        ]
      ],
      activeCity: `Amsterdam`,
      activeCityZoom: 13,
      sortingName: `Popular`,
      activeCityLocation: [
        52.37454,
        4.897976
      ],
      isAppLoad: true,
      isNearLocationLoad: false
    },
    [NameSpace.MAP]: {
      activePin: []
    },
    [NameSpace.REVIEWS]: {
      reviews: [],
      isReviewsLoad: false
    },
    [NameSpace.SCREENS]: {
      currentScreen: `MAIN`
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      user: {}
    }
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

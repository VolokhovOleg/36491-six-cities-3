import {extend} from '../utils';
import {ActionType, ActionCreator} from './actions';
import Adapter from '../adapter';
import Map from '../components/map/map';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  isRenderCardDetail: false,
  activeCity: ``,
  activeCityZoom: 10,
  activeCityLocation: [],
  cities: null,
  activePin: null,
  cardDetail: {},
  hoverPlace: null,
  placeCards: [],
  nearLocations: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_HOTELS:
      return extend(state, {
        placeCards: action.payload,
        activeCity: action.payload[0].city,
        cardDetail: action.payload[0],
        cities: [...new Set(action.payload.map((item) => item.city))],
      });

    case ActionType.SET_TYPE_SCREEN_DETAIL:
      return extend(state, {isRenderCardDetail: true});

    case ActionType.SET_LOCATION_CITY:
      return extend(state, {activeCity: action.payload});

    case ActionType.SET_CARD_DETAIL:
      return extend(state, {cardDetail: action.payload});

    case ActionType.SET_HOVER_PLACE:
      return extend(state, {hoverPlace: action.payload});

    case ActionType.SET_SORTING_PLACES:
      return extend(state, {placeCards: action.payload});

    case ActionType.SET_ACTIVE_PIN:
      return extend(state, {activePin: action.payload});

    case ActionType.SET_NEAR_LOCATIONS:
      return extend(state, {
        nearLocations: action.payload
      });

    case ActionType.SET_COMMENTS:
      return extend(state, {
        reviews: action.payload
      });
  }

  return state;
};

const Operation = {
  setHotels: () => (dispatch, getState, api) => {
    // console.log(getState());
    // get state даёт возможность пользоваться стейтом.
    //   Надо сделать чтобы зум активный город и координаты активного города менялись в мидлвеа
    // city={placeCards.find((item) => item.city === activeCity).cityMapProps.location}
    // zoom={placeCards.find((item) => item.city === activeCity).cityMapProps.zoom}
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.setHotels(Adapter.convertHotels(response.data)));
      });
  },
  setNearLocations: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator
          .setNearLocations(Adapter.convertHotels(response.data)
            .map((item) => item.locations)));
      });
  },
  setComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator
          .setComments(Adapter.convertComments(response.data)
            .map((item) => item)));
      });
  },
};

export {reducer, AuthorizationStatus, Operation};

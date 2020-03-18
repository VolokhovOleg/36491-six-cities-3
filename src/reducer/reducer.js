import {extend} from '../utils';
import {ActionType, ActionCreator} from './actions';
import Adapter from '../adapter';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const Screen = {
  MAIN: `MAIN`,
  CARD_DETAIL: `CARD_DETAIL`,
  FAVORITE_CARDS: `FAVORITE_CARDS`,
  LOGIN: `LOGIN`,
};

const initialState = {
  currentScreen: Screen.MAIN,
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
        activeCityZoom: action.payload.find((item) => item.city === action.payload[0].city).cityMapProps.zoom,
        activeCityLocation: action.payload.find((item) => item.city === action.payload[0].city).cityMapProps.location,
        cities: [...new Set(action.payload.map((item) => item.city))],
      });

    case ActionType.SET_SCREEN:
      return extend(state, {currentScreen: action.payload});

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

    case ActionType.SET_CITY_ACTIVE_CITY_ZOOM:
      return extend(state, {
        activeCityZoom: action.payload,
      });

    case ActionType.SET_CITY_ACTIVE_CITY_LOCATION:
      return extend(state, {
        activeCityLocation: action.payload,
      });
  }

  return state;
};

const Operation = {
  setActiveCityLocation: () => (dispatch, getState) => {
    dispatch(ActionCreator.setActiveCityLocation(getState().placeCards.find((item) => item.city === getState().activeCity).cityMapProps.location));
  },
  setActiveCityZoom: () => (dispatch, getState) => {
    dispatch(ActionCreator.setActiveCityZoom(getState().placeCards.find((item) => item.city === getState().activeCity).cityMapProps.zoom));
  },
  setHotels: () => (dispatch, getState, api) => {
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

export {reducer, AuthorizationStatus, Operation, Screen};

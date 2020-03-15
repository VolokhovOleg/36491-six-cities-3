import {extend} from '../utils';
import {reviews} from '../mocks/reviews';
import {ActionType, ActionCreator} from './actions';
import {convertHotels} from '../adapter';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  isRenderCardDetail: false,
  activeCity: ``,
  cities: null,
  activePin: null,
  cardDetail: {},
  hoverPlace: null,
  placeCards: [],
  originPlaceCards: [],
  nearLocations: [],
  reviews,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_HOTELS:
      return extend(state, {
        placeCards: action.payload,
        originPlaceCards: action.payload,
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
  }

  return state;
};

const Operation = {
  setHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.setHotels(convertHotels(response.data)));
      });
  },
  setNearLocations: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator
          .setNearLocations(convertHotels(response.data)
            .map((item) => item.locations)));
      });
  },
};

export {reducer, AuthorizationStatus, Operation};

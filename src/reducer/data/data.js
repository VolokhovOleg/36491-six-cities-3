import {extend} from '../../utils';
import {ActionType, ActionCreator} from './actions';
import Adapter from '../../adapter';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.HOTELS;
const NAME_SPACE_MAP = NameSpace.MAP;
const SORTING_PROPERTY_NAME = {
  Popular: `Popular`,
  PriceToHigh: `Price: low to high`,
  PriceToLow: `Price: high to low`,
  Rate: `Top rated first`,
};

const initialState = {
  cardDetailsID: null,
  placeCards: [],
  favoritesCards: [],
  nearPlaces: [],
  reviews: [],
  locations: [],
  activeCity: ``,
  activeCityZoom: 10,
  sortingName: SORTING_PROPERTY_NAME.Popular,
  activeCityLocation: null,
  isAppLoad: false,
  isNearLocationLoad: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_HOTELS:
      return extend(state, {placeCards: action.payload});

    case ActionType.SET_NEAR_PLACES:
      return extend(state, {nearPlaces: action.payload});

    case ActionType.SET_FAVORITES_PLACES:
      return extend(state, {favoritesCards: action.payload});

    case ActionType.SET_CARD_DETAILS_ID:
      return extend(state, {cardDetailsID: action.payload});

    case ActionType.SET_HOVER_PLACE:
      return extend(state, {hoverPlace: action.payload});

    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {activeCity: action.payload});

    case ActionType.SET_ACTIVE_CITY_ZOOM:
      return extend(state, {activeCityZoom: action.payload});

    case ActionType.SET_ACTIVE_CITY_LOCATION:
      return extend(state, {activeCityLocation: action.payload});

    case ActionType.SET_APP_LOAD_STATE:
      return extend(state, {isAppLoad: action.payload});

    case ActionType.SET_NEAR_LOCATION_SATE:
      return extend(state, {isNearLocationLoad: action.payload});

    case ActionType.SET_ORDER_BY_SORTING:
      return extend(state, {sortingName: action.payload});

    case ActionType.SET_PINS_LOCATIONS:
      return extend(state, {
        locations: action.payload
      });
  }

  return state;
};

const Operation = {
  init: () => (dispatch, getState, api) => {
    api.get(`/favorite`)
      .then((response) => dispatch(ActionCreator.setFavoritesCards(Adapter.convertHotels(response.data))))
      .catch((error) => {
        throw error;
      });

    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.setHotels(Adapter.convertHotels(response.data)));
        dispatch(ActionCreator.setActiveCity(getState()[NAME_SPACE].placeCards[0].city));
        dispatch(ActionCreator
          .setActiveCityZoom(getState()[NAME_SPACE].placeCards
            .filter((item) => item.city === getState()[NAME_SPACE].activeCity)[0].cityMapProps.zoom));
        dispatch(ActionCreator
          .setActiveCityLocation(getState()[NAME_SPACE].placeCards
            .filter((item) => item.city === getState()[NAME_SPACE].activeCity)[0].cityMapProps.location));
        dispatch(ActionCreator.setAppLoadState());
        dispatch(ActionCreator.setPinsLocations(getState()[NAME_SPACE].placeCards
          .filter((item) => item.city === getState()[NAME_SPACE].activeCity)
          .map((item) => item.locations)));
      })
      .catch((error) => {
        throw error;
      });
  },
  postFavorite: (id, state) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${state ? `1` : `0`}`)
      .then(() => {
        api.get(`/hotels`)
          .then((response) => dispatch(ActionCreator.setHotels(Adapter.convertHotels(response.data))))
          .catch((error) => {
            throw error;
          });

        return api.get(`/favorite`)
          .then((response) => dispatch(ActionCreator.setFavoritesCards(Adapter.convertHotels(response.data))))
          .catch((error) => {
            throw error;
          });
      })
      .catch((error) => {
        throw error;
      });
  },
  setPinsLocations: () => (dispatch, getState) => {
    dispatch(ActionCreator.setPinsLocations(getState()[NAME_SPACE].placeCards
      .filter((item) => item.city === getState()[NAME_SPACE].activeCity)
      .map((item) => item.locations)));
  },
  setNearPinsLocations: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        const convertData = Adapter.convertHotels(response.data);

        dispatch(ActionCreator
          .setPinsLocations([...convertData
            .map((item) => item.locations), getState()[NAME_SPACE_MAP].activePin]));
        dispatch(ActionCreator.setNearPlaces(convertData));
        dispatch(ActionCreator.setNearLocationState(true));
      })
      .catch((error) => {
        throw error;
      });
  },
  setActiveCityLocation: () => (dispatch, getState) => {
    dispatch(ActionCreator
      .setActiveCityLocation(getState()[NAME_SPACE].placeCards
        .filter((item) => item.city === getState()[NAME_SPACE].activeCity)[0].cityMapProps.location));
  },
  setActiveCityZoom: () => (dispatch, getState) => {
    dispatch(ActionCreator
      .setActiveCityZoom(getState()[NAME_SPACE].placeCards
        .filter((item) => item.city === getState()[NAME_SPACE].activeCity)[0].cityMapProps.zoom));
  },
  setOrderBySorting: (sortingBy) => (dispatch, getState) => {
    dispatch(ActionCreator.setOrderBySorting(sortingBy));

    switch (getState()[NAME_SPACE].sortingName) {
      case SORTING_PROPERTY_NAME.PriceToHigh:
        dispatch(ActionCreator.setHotels(getState()[NAME_SPACE].placeCards.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10))));
        break;
      case SORTING_PROPERTY_NAME.PriceToLow:
        dispatch(ActionCreator.setHotels(getState()[NAME_SPACE].placeCards.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10))));
        break;
      case SORTING_PROPERTY_NAME.Rate:
        dispatch(ActionCreator.setHotels(getState()[NAME_SPACE].placeCards.sort((a, b) => b.rating - a.rating)));
        break;
      case SORTING_PROPERTY_NAME.Popular:
        dispatch(ActionCreator.setHotels(getState()[NAME_SPACE].placeCards.sort((a, b) => a.id - b.id)));
        break;
    }
  },
};

export {reducer, Operation, ActionType, ActionCreator, SORTING_PROPERTY_NAME};

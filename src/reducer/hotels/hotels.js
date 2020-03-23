import {extend} from '../../utils';
import {ActionType, ActionCreator} from './actions';
import Adapter from '../../adapter';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.HOTELS;

const initialState = {
  cardDetail: {},
  placeCards: [],
  filteredPlacesByCity: [],
  activeCity: ``,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_HOTELS:
      return extend(state, {placeCards: action.payload});

    case ActionType.SET_SORTED_PLACES:
      return extend(state, {filteredPlacesByCity: action.payload});

    case ActionType.SET_FILTERED_PLACES:
      return extend(state, {filteredPlacesByCity: action.payload});

    case ActionType.SET_CARD_DETAIL:
      return extend(state, {cardDetail: action.payload});

    case ActionType.SET_HOVER_PLACE:
      return extend(state, {hoverPlace: action.payload});

    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {activeCity: action.payload});
  }

  return state;
};

const Operation = {
  setHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.setHotels(Adapter.convertHotels(response.data)));
        dispatch(ActionCreator.setActiveCity(getState()[NAME_SPACE].placeCards[0].city));
        dispatch(ActionCreator
          .setFilteredPlacesByCity(getState()[NAME_SPACE].placeCards
            .filter((item) => item.city === getState()[NAME_SPACE].activeCity)));
      });
  },
  setFilteredPlacesByCity: () => (dispatch, getState) => dispatch(ActionCreator
    .setFilteredPlacesByCity(getState()[NAME_SPACE].placeCards
      .filter((item) => item.city === getState()[NAME_SPACE].activeCity))),
};

export {reducer, Operation, ActionType, ActionCreator};

import {extend} from '../../utils';
import {ActionType, ActionCreator} from './actions';
import Adapter from '../../adapter';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.HOTELS;

const initialState = {
  activePin: [],
  nearLocations: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
  setActivePin: (id) => (dispatch, getState) => {
    dispatch(ActionCreator.setActivePin(id === null ? null : getState()[NAME_SPACE].placeCards.find((item) => item.id === id).locations));
  },
  setNearLocations: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        dispatch(ActionCreator
          .setNearLocations(Adapter.convertHotels(response.data)
            .map((item) => item.locations)));
      });
  },
};

export {reducer, Operation, ActionType, ActionCreator};

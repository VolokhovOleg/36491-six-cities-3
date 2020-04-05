import {extend} from '../../utils';
import {ActionType, ActionCreator} from './actions';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.HOTELS;

const initialState = {
  activePin: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_PIN:
      return extend(state, {activePin: action.payload});
  }

  return state;
};

const Operation = {
  setActivePin: (id) => (dispatch, getState) => {
    dispatch(ActionCreator.setActivePin(id === null ? null : getState()[NAME_SPACE].placeCards.find((item) => item.id === id).locations));
  },
};

export {reducer, Operation, ActionType, ActionCreator};

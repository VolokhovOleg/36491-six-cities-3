import {extend} from '../../utils';
import {ActionType, ActionCreator} from './actions';

const Screen = {
  MAIN: `MAIN`,
  CARD_DETAIL: `CARD_DETAIL`,
  FAVORITE_CARDS: `FAVORITE_CARDS`,
  LOGIN: `LOGIN`,
};

const initialState = {
  currentScreen: Screen.MAIN,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_SCREEN:
      return extend(state, {currentScreen: action.payload});
  }

  return state;
};

export {reducer, Screen, ActionType, ActionCreator};

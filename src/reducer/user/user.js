import {ActionType, ActionCreator} from './actions';
import {extend} from '../../utils';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
  }
  return state;
};

export {reducer, AuthorizationStatus, ActionType, ActionCreator};

import {ActionType, ActionCreator} from './actions';
import {extend} from '../../utils';
import Adapter from '../../adapter';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.SET_USER_DATA:
      return extend(state, {user: action.payload});
  }
  return state;
};

const Operation = {
  login: (data) => (dispatch, getState, api) => {
    return api.post(`/login`, data)
      .then((response) => {
        dispatch(ActionCreator.setUserData(Adapter.convertUser(response.data)));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((error) => {
        throw error;
      });
  },
  checkUserData: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setUserData(Adapter.convertUser(response.data)));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((error) => {
        throw error;
      });
  }
};

export {reducer, AuthorizationStatus, ActionType, ActionCreator, Operation};

import {extend} from '../../utils';
import {ActionType, ActionCreator} from './actions';
import Adapter from '../../adapter';

const initialState = {
  reviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_COMMENTS:
      return extend(state, {
        reviews: action.payload
      });
  }

  return state;
};

const Operation = {
  setComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator
          .setComments(Adapter.convertComments(response.data)
            .map((item) => item)));
      });
  },
};

export {reducer, ActionType, ActionCreator, Operation};

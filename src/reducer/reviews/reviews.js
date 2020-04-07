import {extend} from '../../utils';
import {ActionType, ActionCreator} from './actions';
import Adapter from '../../adapter';

const reviewLength = {
  MIN: 50,
  MAX: 300,
};

const initialState = {
  reviews: [],
  isReviewsLoad: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_COMMENTS:
      return extend(state, {
        reviews: action.payload
      });
    case ActionType.SET_COMMENTS_STATE:
      return extend(state, {
        isReviewsLoad: true
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
        dispatch(ActionCreator.setReviewsState());
      });
  },
  sendReview: (data, id) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, data)
      .then(() => {
        return api.get(`/comments/${id}`)
          .then((response) => {
            dispatch(ActionCreator
              .setComments(Adapter.convertComments(response.data)
                .map((item) => item)));
            dispatch(ActionCreator.setReviewsState());
          });
      });
  },
};

export {reducer, ActionType, ActionCreator, Operation, reviewLength};

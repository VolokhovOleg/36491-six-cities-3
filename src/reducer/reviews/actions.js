const ActionType = {
  SET_COMMENTS: `SET_COMMENTS`,
  SET_COMMENTS_STATE: `SET_COMMENTS_STATE`,
};

const ActionCreator = {
  setComments: (data) => ({
    type: ActionType.SET_COMMENTS,
    payload: data,
  }),
  setReviewsState: (state) => ({
    type: ActionType.SET_COMMENTS_STATE,
    payload: state,
  }),
};

export {ActionType, ActionCreator};

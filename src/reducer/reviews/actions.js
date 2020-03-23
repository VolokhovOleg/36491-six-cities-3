const ActionType = {
  SET_COMMENTS: `SET_COMMENTS`,
};

const ActionCreator = {
  setComments: (data) => ({
    type: ActionType.SET_COMMENTS,
    payload: data,
  }),
};

export {ActionType, ActionCreator};

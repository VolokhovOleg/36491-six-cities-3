const ActionType = {
  SET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
};

const ActionCreator = {
  setActivePin: (locations) => ({
    type: ActionType.SET_ACTIVE_PIN,
    payload: locations,
  }),
};

export {ActionType, ActionCreator};

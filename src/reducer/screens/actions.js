const ActionType = {
  SET_SCREEN: `SET_SCREEN`,
};

const ActionCreator = {
  setScreen: (screen) => ({
    type: ActionType.SET_SCREEN,
    payload: screen,
  }),
};

export {ActionType, ActionCreator};

const ActionType = {
  SET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
  SET_NEAR_LOCATIONS: `SET_NEAR_LOCATIONS`,
};

const ActionCreator = {
  setComments: (data) => ({
    type: ActionType.SET_COMMENTS,
    payload: data,
  }),
  setNearLocations: (data) => ({
    type: ActionType.SET_NEAR_LOCATIONS,
    payload: data,
  }),
  setActivePin: (locations) => ({
    type: ActionType.SET_ACTIVE_PIN,
    payload: locations,
  }),
};

export {ActionType, ActionCreator};

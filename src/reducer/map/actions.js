const ActionType = {
  SET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
  SET_NEAR_LOCATIONS: `SET_NEAR_LOCATIONS`,
  SET_ACTIVE_CITY_ZOOM: `SET_ACTIVE_CITY_ZOOM`,
  SET_ACTIVE_CITY_LOCATION: `SET_ACTIVE_CITY_LOCATION`,
};

const ActionCreator = {
  setActiveCityLocation: (CityLocation) => ({
    type: ActionType.SET_ACTIVE_CITY_LOCATION,
    payload: CityLocation,
  }),
  setActiveCityZoom: (zoom) => ({
    type: ActionType.SET_ACTIVE_CITY_ZOOM,
    payload: zoom,
  }),
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

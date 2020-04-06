const ActionType = {
  SET_CARD_DETAILS_ID: `SET_CARD_DETAILS_ID`,
  SET_HOVER_PLACE: `SET_HOVER_PLACE`,
  SET_HOTELS: `SET_HOTELS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_ACTIVE_CITY_ZOOM: `SET_ACTIVE_CITY_ZOOM`,
  SET_ACTIVE_CITY_LOCATION: `SET_ACTIVE_CITY_LOCATION`,
  SET_APP_LOAD_STATE: `SET_APP_LOAD_STATE`,
  SET_ORDER_BY_SORTING: `SET_ORDER_BY_SORTING`,
  SET_PINS_LOCATIONS: `SET_PINS_LOCATIONS`,
  SET_NEAR_LOCATION_SATE: `SET_NEAR_LOCATION_SATE`,
  SET_NEAR_PLACES: `SET_NEAR_PLACES`,
  SET_FAVORITES_PLACES: `SET_FAVORITES_PLACES`,
};

const ActionCreator = {
  setHotels: (data) => ({
    type: ActionType.SET_HOTELS,
    payload: data,
  }),
  setCardDetailsID: (id) => ({
    type: ActionType.SET_CARD_DETAILS_ID,
    payload: id,
  }),
  setFavoritesCards: (data) => ({
    type: ActionType.SET_FAVORITES_PLACES,
    payload: data,
  }),
  setActiveCity: (city) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: city,
  }),
  setActiveCityLocation: (locations) => ({
    type: ActionType.SET_ACTIVE_CITY_LOCATION,
    payload: locations,
  }),
  setActiveCityZoom: (locations) => ({
    type: ActionType.SET_ACTIVE_CITY_ZOOM,
    payload: locations,
  }),
  setAppLoadState: () => ({
    type: ActionType.SET_APP_LOAD_STATE,
    payload: true,
  }),
  setNearLocationState: () => ({
    type: ActionType.SET_NEAR_LOCATION_SATE,
    payload: true,
  }),
  setOrderBySorting: (sortingBy) => ({
    type: ActionType.SET_ORDER_BY_SORTING,
    payload: sortingBy,
  }),
  setPinsLocations: (data) => ({
    type: ActionType.SET_PINS_LOCATIONS,
    payload: data,
  }),
  setNearPlaces: (data) => ({
    type: ActionType.SET_NEAR_PLACES,
    payload: data,
  }),
};

export {ActionType, ActionCreator};

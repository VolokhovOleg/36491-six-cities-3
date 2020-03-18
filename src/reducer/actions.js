const ActionType = {
  SET_SCREEN: `SET_SCREEN`,
  SET_LOCATION_CITY: `SET_LOCATION_CITY`,
  SET_CARD_DETAIL: `SET_CARD_DETAIL`,
  SET_HOVER_PLACE: `SET_HOVER_PLACE`,
  SET_SORTING_PLACES: `SET_SORTING_PLACES`,
  SET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_HOTELS: `SET_HOTELS`,
  SET_NEAR_LOCATIONS: `SET_NEAR_LOCATIONS`,
  SET_COMMENTS: `SET_COMMENTS`,
  SET_CITY_ACTIVE_CITY_ZOOM: `SET_CITY_ACTIVE_CITY_ZOOM`,
  SET_CITY_ACTIVE_CITY_LOCATION: `SET_CITY_ACTIVE_CITY_LOCATION`,
};

const ActionCreator = {
  setActiveCityLocation: (CityLocation) => ({
    type: ActionType.SET_CITY_ACTIVE_CITY_LOCATION,
    payload: CityLocation,
  }),
  setActiveCityZoom: (zoom) => ({
    type: ActionType.SET_CITY_ACTIVE_CITY_ZOOM,
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setHotels: (data) => ({
    type: ActionType.SET_HOTELS,
    payload: data,
  }),
  setScreen: (screen) => ({
    type: ActionType.SET_SCREEN,
    payload: screen,
  }),
  setLocationCity: (city) => ({
    type: ActionType.SET_LOCATION_CITY,
    payload: city,
  }),
  setCardDetail: (cardDetail) => ({
    type: ActionType.SET_CARD_DETAIL,
    payload: cardDetail,
  }),
  setHoverPlace: (place) => ({
    type: ActionType.SET_HOVER_PLACE,
    payload: place,
  }),
  setSortingPlaces: (sortingPlaces) => ({
    type: ActionType.SET_SORTING_PLACES,
    payload: sortingPlaces,
  }),
  setActivePin: (locations) => ({
    type: ActionType.SET_ACTIVE_PIN,
    payload: locations,
  }),
};

export {ActionType, ActionCreator};

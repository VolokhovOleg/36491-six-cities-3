const ActionType = {
  SET_CARD_DETAIL: `SET_CARD_DETAIL`,
  SET_HOVER_PLACE: `SET_HOVER_PLACE`,
  SET_HOTELS: `SET_HOTELS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_FILTERED_PLACES: `SET_FILTERED_PLACES`,
  SET_ACTIVE_CITY_ZOOM: `SET_ACTIVE_CITY_ZOOM`,
  SET_ACTIVE_CITY_LOCATION: `SET_ACTIVE_CITY_LOCATION`,
};

const ActionCreator = {
  setHotels: (data) => ({
    type: ActionType.SET_HOTELS,
    payload: data,
  }),
  setCardDetail: (cardDetail) => ({
    type: ActionType.SET_CARD_DETAIL,
    payload: cardDetail,
  }),
  setActiveCity: (city) => ({
    type: ActionType.SET_ACTIVE_CITY,
    payload: city,
  }),
  setFilteredPlaces: (data) => ({
    type: ActionType.SET_FILTERED_PLACES,
    payload: data,
  }),
  setActiveCityLocation: (locations) => ({
    type: ActionType.SET_ACTIVE_CITY_LOCATION,
    payload: locations,
  }),
  setActiveCityZoom: (locations) => ({
    type: ActionType.SET_ACTIVE_CITY_ZOOM,
    payload: locations,
  }),
};

export {ActionType, ActionCreator};

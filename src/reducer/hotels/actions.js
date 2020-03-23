const ActionType = {
  SET_CARD_DETAIL: `SET_CARD_DETAIL`,
  SET_HOVER_PLACE: `SET_HOVER_PLACE`,
  SET_HOTELS: `SET_HOTELS`,
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_FILTERED_PLACES: `SET_FILTERED_PLACES`,
  SET_SORTED_PLACES: `SET_SORTED_PLACES`,
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
  setFilteredPlacesByCity: (filteredPlaces) => ({
    type: ActionType.SET_FILTERED_PLACES,
    payload: filteredPlaces,
  }),
  setSortedPlaces: (data) => ({
    type: ActionType.SET_SORTED_PLACES,
    payload: data,
  }),
};

export {ActionType, ActionCreator};

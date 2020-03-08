const ActionType = {
  SET_TYPE_SCREEN_DETAIL: `SET_TYPE_SCREEN_DETAIL`,
  SET_LOCATION_CITY: `SET_LOCATION_CITY`,
  SET_CARD_DETAIL: `SET_CARD_DETAIL`,
  SET_HOVER_PLACE: `SET_HOVER_PLACE`,
  SET_SORTING_PLACES: `SET_SORTING_PLACES`,
};

const ActionCreator = {
  setDetailCard: () => ({
    type: ActionType.SET_TYPE_SCREEN_DETAIL
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
};

export {ActionType, ActionCreator};

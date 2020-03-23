import {createSelector} from 'reselect';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.HOTELS;

const getHotels = (state) => {
  return state[NAME_SPACE].placeCards;
};

const getFilteredPlacesByCity = (state) => {
  return state[NAME_SPACE].filteredPlacesByCity;
};

const getCardDetails = (state) => {
  return state[NAME_SPACE].cardDetail;
};

const getHoverPlace = (state) => {
  return state[NAME_SPACE].hoverPlace;
};

const getActiveCity = (state) => {
  return state[NAME_SPACE].activeCity;
};

const getPlacesToStay = (state) => {
  return state[NAME_SPACE].filteredPlacesByCity.length;
};

const getLocations = createSelector(
  getFilteredPlacesByCity,
  (hotels) => {
    return hotels.map((item) => item.locations);
  }
);

const getCities = createSelector(
  getHotels,
  (hotels) => {
    return [...new Set(hotels.map((item) => item.city))];
  }
);

export {getHotels, getCardDetails, getHoverPlace, getActiveCity, getPlacesToStay, getLocations, getCities, getFilteredPlacesByCity};

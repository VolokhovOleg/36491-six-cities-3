import {createSelector} from 'reselect';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.HOTELS;

const getCityLocation = (state) => {
  return state[NAME_SPACE].activeCityLocation;
};

const getActiveCityZoom = (state) => {
  return state[NAME_SPACE].getActiveCityZoom;
};

const getHotels = (state) => {
  return state[NAME_SPACE].placeCards;
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
  return state[NAME_SPACE].filteredPlaceCards.length;
};

const getFiltered = createSelector(
  getHotels,
  getActiveCity,
  (hotels, activeCity) => {
    return hotels.filter((item) => item.city === activeCity);
  }
);

const getLocations = createSelector(
  getHotels,
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

export {getHotels, getCardDetails, getHoverPlace, getActiveCity, getPlacesToStay, getLocations, getCities, getFiltered, getCityLocation, getActiveCityZoom};

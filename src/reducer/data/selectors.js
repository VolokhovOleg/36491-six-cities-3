import {createSelector} from 'reselect';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.HOTELS;

const getCityLocation = (state) => {
  return state[NAME_SPACE].activeCityLocation;
};

const getActiveCityZoom = (state) => {
  return state[NAME_SPACE].activeCityZoom;
};

const getHotels = (state) => {
  return state[NAME_SPACE].placeCards;
};

const getCardDetailsID = (state) => {
  return state[NAME_SPACE].cardDetailsID;
};

const getHoverPlace = (state) => {
  return state[NAME_SPACE].hoverPlace;
};

const getActiveCity = (state) => {
  return state[NAME_SPACE].activeCity;
};

const getApp = (state) => {
  return state[NAME_SPACE].isAppLoad;
};

const getSortingName = (state) => {
  return state[NAME_SPACE].sortingName;
};

const getNearLocationsState = (state) => {
  return state[NAME_SPACE].isNearLocationLoad;
};

const getFiltered = createSelector(
  getHotels,
  getActiveCity,
  (hotels, activeCity) => {
    return hotels.filter((item) => item.city === activeCity);
  }
);

const getCardDetails = createSelector(
  getFiltered,
  getCardDetailsID,
  (hotels, id) => {
    return hotels.filter((item) => item.id === id)[0];
  }
);

const getPlacesToStay = createSelector(
  getFiltered,
  (hotels) => {
    return hotels.length;
  }
);

const getNearPlaces = (state) => {
  return state[NAME_SPACE].nearPlaces;
};

const getPinsLocation = (state) => {
  return state[NAME_SPACE].locations;
};

const getFavoritesCards = (state) => {
  return state[NAME_SPACE].favoritesCards;
};

const getCities = createSelector(
  getHotels,
  (hotels) => {
    return [...new Set(hotels.map((item) => item.city))];
  }
);

export {getCardDetailsID, getFavoritesCards, getNearPlaces, getNearLocationsState, getHotels, getCardDetails, getHoverPlace, getActiveCity, getPlacesToStay, getPinsLocation, getCities, getFiltered, getCityLocation, getActiveCityZoom, getApp, getSortingName};

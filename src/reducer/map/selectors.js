import {createSelector} from 'reselect';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.MAP;

const getActivePin = (state) => {
  return state[NAME_SPACE].getActivePin;
};

const getNearLocations = (state) => {
  return state[NAME_SPACE].getNearLocations;
};

export {getNearLocations, getActivePin};

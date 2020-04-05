import {createSelector} from 'reselect';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.MAP;

const getActivePin = (state) => {
  return state[NAME_SPACE].activePin;
};

export {getActivePin};

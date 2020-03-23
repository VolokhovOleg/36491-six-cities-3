import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.MAP;

const getNearLocations = (state) => {
  return state[NAME_SPACE].nearLocations;
};

export {getNearLocations};

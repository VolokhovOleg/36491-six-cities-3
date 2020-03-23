import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.SCREENS;

const getScreen = (state) => {
  return state[NAME_SPACE].currentScreen;
};

export {getScreen};

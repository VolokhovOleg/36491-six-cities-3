import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.REVIEWS;

const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

export {getReviews};

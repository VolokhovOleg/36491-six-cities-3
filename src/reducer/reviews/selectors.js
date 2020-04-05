import {createSelector} from 'reselect';
import NameSpace from '../name-space';

const NAME_SPACE = NameSpace.REVIEWS;

const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};

const getReviewsState = (state) => {
  return state[NAME_SPACE].isReviewsLoad;
};

const getSortedReviews = createSelector(
  getReviews,
  (reviews) => {
    reviews = reviews.sort((a, b) => b.date - a.date);
    return reviews;
  }
);

export {getSortedReviews, getReviewsState};

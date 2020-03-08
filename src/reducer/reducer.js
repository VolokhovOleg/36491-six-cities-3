import {extend} from '../utils';
import {placeCards} from '../mocks/offers';
import {reviews} from '../mocks/reviews';
import {ActionType} from './actions';

const initialState = {
  isRenderCardDetail: false,
  activeCity: placeCards[0].city,
  cardDetail: placeCards[0],
  hoverPlace: placeCards[0],
  placeCards,
  originPlaceCards: [...placeCards],
  reviews,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_TYPE_SCREEN_DETAIL:
      return extend(state, {isRenderCardDetail: true});

    case ActionType.SET_LOCATION_CITY:
      return extend(state, {activeCity: action.payload});

    case ActionType.SET_CARD_DETAIL:
      return extend(state, {cardDetail: action.payload});

    case ActionType.SET_HOVER_PLACE:
      return extend(state, {hoverPlace: action.payload});

    case ActionType.SET_SORTING_PLACES:
      return extend(state, {placeCards: action.payload});
  }

  return state;
};

export {reducer};

import {extend} from './utils';

const initialState = {
  activeCity: ``,
};

const reducer = (state = initialState, action) => {
  extend(state, {
    activeCity: action.payload,
  });

  return state;
};

export {reducer};

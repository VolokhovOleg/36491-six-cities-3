import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const placesToStay = 312;
const placeCards = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];
const titleClickHandler = () => {};

const App = () => {
  return <>
    <Main
      placesToStay = {placesToStay}
      placeCards = {placeCards}
      onTitleClick = {titleClickHandler}
    />
  </>;
};

App.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default App;

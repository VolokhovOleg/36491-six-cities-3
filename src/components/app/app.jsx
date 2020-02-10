import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const placesToStay = 312;

const App = ({placeCards}) => {
  return <>
    <Main
      placesToStay = {placesToStay}
      placeCards = {placeCards}
    />
  </>;
};

App.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;

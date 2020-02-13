import Main from '../main/main';

const placesToStay = 312;
const placeCards = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

const App = () => {
  return <>
    <Main
      placesToStay = {placesToStay}
      placeCards = {placeCards}
    />
  </>;
};

App.propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default App;

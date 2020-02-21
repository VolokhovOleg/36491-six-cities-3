import Main from '../main/main';

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
  placeCards: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
  })).isRequired,
};

export default App;

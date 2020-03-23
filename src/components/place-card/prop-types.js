export const propTypes = {
  placeData: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  currentScreen: PropTypes.string.isRequired,
};

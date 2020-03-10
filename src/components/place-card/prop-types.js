export const propTypes = {
  placeData: PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  isDetailsPage: PropTypes.bool.isRequired,
};

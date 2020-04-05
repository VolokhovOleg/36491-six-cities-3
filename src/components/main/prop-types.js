export const propTypes = {
  placeCards: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    inside: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    gallery: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    price: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  activeCity: PropTypes.string.isRequired,
  placesToStay: PropTypes.number.isRequired,
  isAppLoad: PropTypes.bool.isRequired,
};

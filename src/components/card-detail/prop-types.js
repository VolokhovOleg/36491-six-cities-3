export const propTypes = {
  placeData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    locations: PropTypes.array.isRequired,
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
  }).isRequired,
};

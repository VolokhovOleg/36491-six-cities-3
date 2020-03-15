export const propTypes = {
  isRenderCardDetail: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    userRate: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired
  ).isRequired,
  onHoverPlace: PropTypes.func.isRequired,
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
};

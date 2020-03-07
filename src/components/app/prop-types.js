export const propTypes = {
  isRenderCardDetail: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
  propertyCard: PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    inside: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    gallery: PropTypes.arrayOf(PropTypes.shape({
      galleryImg: PropTypes.string.isRequired,
      galleryTitle: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
    price: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      hostTitle: PropTypes.string.isRequired,
      hostDescription: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    })}).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    userRate: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired
  ).isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  placeCards: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    inside: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    gallery: PropTypes.arrayOf(PropTypes.shape({
      galleryImg: PropTypes.string.isRequired,
      galleryTitle: PropTypes.string.isRequired,
    }).isRequired
    ).isRequired,
    price: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      hostTitle: PropTypes.string.isRequired,
      hostDescription: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  })).isRequired,
};

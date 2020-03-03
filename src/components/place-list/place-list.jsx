import PlaceCard from '../place-card/place-card';

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredPlaceIndex: null,
    };
  }

  render() {
    const {placeCards, onTitleClick, isDetailsPage} = this.props;

    return (<>
      <div className={`${isDetailsPage ? `near-places__list` : `cities__places-list tabs__content`} places__list`}>
        {placeCards.map((item, index) =>
          <PlaceCard
            key={index + item}
            placeData={item}
            isDetailsPage={isDetailsPage}
            onTitleClick={onTitleClick}
            onHoverPlace={(place) => {
              this.setState({
                hoveredPlaceIndex: place,
              });
            }
            }
          />)}
      </div>
    </>);
  }
}

PlaceList.propTypes = {
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
  onTitleClick: PropTypes.func.isRequired,
  isDetailsPage: PropTypes.bool.isRequired,
};

export default PlaceList;

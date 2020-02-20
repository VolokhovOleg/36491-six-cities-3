import PlaceCard from '../place-card/place-card';
class PlaceList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredPlaceIndex: null,
    };
  }

  render() {
    const {placeCards} = this.props;

    return (<>
      <div className="cities__places-list places__list tabs__content">
        {placeCards.map((item, index) =>
          <PlaceCard
            key={index + item}
            placeData={item}
            onTitleClick={() => {}}
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
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
  })).isRequired,
};

export default PlaceList;

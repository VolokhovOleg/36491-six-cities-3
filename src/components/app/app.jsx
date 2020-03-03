import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import PlaceCard from '../place-card/place-card';
import PlaceList from '../place-list/place-list';
import CardDetail from '../card-detail/card-detail';

class App extends PureComponent {
  constructor(props) {
    super(props);

    const {placeCards} = this.props;

    this.state = {
      isRenderProperty: false,
      activeCity: placeCards[0].city,
      propertyCard: null,
    };
  }

  _renderMainScreen() {
    const {placeCards, reviews} = this.props;
    const {propertyCard, isRenderProperty, activeCity} = this.state;
    const placeToStay = placeCards.filter((item) => item.city === activeCity).length;
    const filteredPlaceCards = placeCards.filter((item) => item.city === activeCity);

    if (isRenderProperty) {
      return (<CardDetail
        reviews={reviews}
        placeCards={filteredPlaceCards}
        onTitleClick={
          (placeData) => {
            this.setState({
              propertyCard: placeData,
              isRenderProperty: !isRenderProperty,
            });
          }
        }
        placeData={propertyCard}
      />);
    }

    if (!isRenderProperty) {
      return (<Main
        placesToStay={placeToStay}
        placeCards={filteredPlaceCards}
        activeCity={activeCity}
        onCityClick={
          (city) => {
            this.setState({
              activeCity: city,
            });
          }
        }
        onTitleClick={
          (placeData) => {
            this.setState({
              propertyCard: placeData,
              isRenderProperty: !isRenderProperty,
            });
          }
        }
      />);
    }

    return null;
  }

  render() {
    const {placeCards, reviews} = this.props;

    return (<>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderMainScreen()}
          </Route>
          <Route exact path='/dev-property'>
            <CardDetail
              reviews={reviews}
              placeData = {placeCards[0]}
              placeCards = {placeCards}
              onTitleClick={()=>{}}
            />
          </Route>
          <Route exact path='/dev-place-card'>
            <PlaceCard
              onTitleClick={()=>{}}
              onHoverPlace={() => {}}
              placeData = {placeCards[0]}
              isDetailsPage={true}
            />
          </Route>
          <Route exact path='/dev-place-list'>
            <PlaceList
              onTitleClick={()=>{}}
              placeCards = {placeCards}
              isDetailsPage={true}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>);
  }
}

App.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    userRate: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    date: PropTypes.any.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired
  ).isRequired,
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

export default App;

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import PlaceCard from '../place-card/place-card';
import PlaceList from '../place-list/place-list';
import Property from '../property/property';

const placesToStay = 312;

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isRenderProperty: false,
      propertyCard: null,
    };
  }

  _renderMainScreen() {
    const {placeCards} = this.props;
    const {propertyCard, isRenderProperty} = this.state;
    if (isRenderProperty) {
      return (<Property
        placeData={propertyCard}
      />);
    }

    if (!isRenderProperty) {
      return (<Main
        placesToStay={placesToStay}
        placeCards={placeCards}
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
    const {placeCards} = this.props;

    return (<>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderMainScreen()}
          </Route>
          <Route exact path='/dev-property'>
            <Property
              placeData = {placeCards[0]}
            />
          </Route>
          <Route exact path='/dev-place-card'>
            <PlaceCard
              onTitleClick={()=>{}}
              onHoverPlace={() => {}}
              placeData = {placeCards[0]}
            />
          </Route>
          <Route exact path='/dev-place-list'>
            <PlaceList
              onTitleClick={()=>{}}
              placeCards = {placeCards}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>);
  }
}

App.propTypes = {
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
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      hostTitle: PropTypes.string.isRequired,
      hostDescription: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  })).isRequired,
};

export default App;

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import CardDetail from '../card-detail/card-detail';
import {ActionCreator} from '../../reducer/actions';
import {propTypes} from './prop-types';
import {Operation as DataOperation, Screen} from '../../reducer/reducer';

const App = ({placeCards, reviews, currentScreen, cities, activeCity, propertyCard, onTitleClick, onCityClick, onHoverPlace, nearLocations}) => {
  const placeToStay = placeCards.filter((item) => item.city === activeCity).length;
  const filteredPlaceCards = placeCards.filter((item) => item.city === activeCity);

  const _renderMainScreen = () => {
    if (currentScreen === Screen.CARD_DETAIL) {
      return (<CardDetail
        reviews={reviews}
        placeCards={filteredPlaceCards.slice(0, 3)}
        cities={filteredPlaceCards}
        currentScreen={currentScreen}
        onTitleClick={onTitleClick}
        placeData={propertyCard}
        onHoverPlace={onHoverPlace}
        nearLocations={nearLocations}
      />);
    }

    if (currentScreen === Screen.MAIN) {
      return (<Main
        cities={cities}
        placesToStay={placeToStay}
        placeCards={filteredPlaceCards}
        currentScreen={currentScreen}
        activeCity={activeCity}
        onCityClick={onCityClick}
        onTitleClick={onTitleClick}
        onHoverPlace={onHoverPlace}
      />);
    }

    return null;
  };

  return <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {_renderMainScreen()}
        </Route>
      </Switch>
    </BrowserRouter>
    </>;
};

const mapInitialProps = (state) => ({
  currentScreen: state.currentScreen,
  activeCity: state.activeCity,
  propertyCard: state.cardDetail,
  reviews: state.reviews,
  placeCards: state.placeCards,
  hoverPlace: state.hoverPlace,
  cities: state.cities,
  nearLocations: state.nearLocations,
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(placeData) {
    dispatch(ActionCreator.setScreen(Screen.CARD_DETAIL));
    dispatch(ActionCreator.setCardDetail(placeData));
    dispatch(ActionCreator.setActivePin(placeData.locations));
    dispatch(DataOperation.setNearLocations(placeData.id));
    dispatch(DataOperation.setComments(placeData.id));
    dispatch(DataOperation.setActiveCityLocation());
    dispatch(DataOperation.setActiveCityZoom());
  },
  onCityClick(activeCity) {
    dispatch(ActionCreator.setLocationCity(activeCity));
    dispatch(DataOperation.setActiveCityLocation());
    dispatch(DataOperation.setActiveCityZoom());
  },
  onHoverPlace(place) {
    dispatch(ActionCreator.setHoverPlace(place));
    dispatch(ActionCreator.setActivePin(place ? place.locations : null));
  },
});

App.propTypes = propTypes;

export {App};
export default connect(mapInitialProps, mapDispatchToProps)(App);

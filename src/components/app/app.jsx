import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import CardDetail from '../card-detail/card-detail';
import {ActionCreator} from '../../reducer/actions';
import {propTypes} from './prop-types';
import {Operation as DataOperation} from '../../reducer/reducer';

const App = ({placeCards, reviews, isRenderCardDetail, cities, activeCity, propertyCard, onTitleClick, onCityClick, onHoverPlace, nearLocations}) => {
  const placeToStay = placeCards.filter((item) => item.city === activeCity).length;
  const filteredPlaceCards = placeCards.filter((item) => item.city === activeCity);

  const _renderMainScreen = () => {
    if (isRenderCardDetail) {
      return (<CardDetail
        reviews={reviews}
        placeCards={filteredPlaceCards.slice(0, 3)}
        cities={filteredPlaceCards}
        onTitleClick={onTitleClick}
        placeData={propertyCard}
        onHoverPlace={onHoverPlace}
        nearLocations={nearLocations}
      />);
    }

    if (!isRenderCardDetail) {
      return (<Main
        cities={cities}
        placesToStay={placeToStay}
        placeCards={filteredPlaceCards}
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
  isRenderCardDetail: state.isRenderCardDetail,
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
    dispatch(ActionCreator.setCardDetail(placeData));
    dispatch(ActionCreator.setDetailCard(true));
    dispatch(ActionCreator.setActivePin(placeData.locations));
    dispatch(DataOperation.setNearLocations(placeData.id));
    dispatch(DataOperation.setComments(placeData.id));
  },
  onCityClick(activeCity) {
    dispatch(ActionCreator.setLocationCity(activeCity));
  },
  onHoverPlace(place) {
    dispatch(ActionCreator.setHoverPlace(place));
    dispatch(ActionCreator.setActivePin(place ? place.locations : null));
  },
});

App.propTypes = propTypes;

export {App};
export default connect(mapInitialProps, mapDispatchToProps)(App);

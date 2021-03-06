import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import CardDetail from '../card-detail/card-detail';
import {ActionCreator} from '../../reducer/actions';
import {propTypes} from './prop-types';

const App = ({placeCards, reviews, isRenderCardDetail, activeCity, propertyCard, onTitleClick, onCityClick, onHoverPlace}) => {
  const placeToStay = placeCards.filter((item) => item.city === activeCity).length;
  const filteredPlaceCards = placeCards.filter((item) => item.city === activeCity);

  const _renderMainScreen = () => {
    if (isRenderCardDetail) {
      return (<CardDetail
        reviews={reviews}
        placeCards={filteredPlaceCards}
        onTitleClick={onTitleClick}
        placeData={propertyCard}
        onHoverPlace={onHoverPlace}
      />);
    }

    if (!isRenderCardDetail) {
      return (<Main
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
});

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(placeData) {
    dispatch(ActionCreator.setCardDetail(placeData));
    dispatch(ActionCreator.setDetailCard(true));
    dispatch(ActionCreator.setActivePin(placeData.locations));
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

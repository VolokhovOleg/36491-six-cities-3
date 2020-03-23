import PlaceCard from '../place-card/place-card';
import {propTypes} from './prop-types';
import {Screen} from '../../reducer/screens/screens';
import {getFilteredPlacesByCity} from '../../reducer/hotels/selectors';
import {getScreen} from '../../reducer/screens/selectors';
import {connect} from 'react-redux';

// eslint-disable-next-line react/display-name
const PlaceList = memo(({placeCards, currentScreen}) => {
  return <>
    <div className={`${currentScreen === Screen.CARD_DETAIL ? `near-places__list` : `cities__places-list tabs__content`} places__list`}>
      {placeCards.map((item, index) =>
        <PlaceCard
          key={index + item}
          placeData={item}
        />)}
    </div>
  </>;
});

const mapStateToProps = (state) => ({
  placeCards: getFilteredPlacesByCity(state),
  currentScreen: getScreen(state),
});

PlaceList.propTypes = propTypes;

export {PlaceList};
export default connect(mapStateToProps)(PlaceList);

import PlaceCard from '../place-card/place-card';
import {propTypes} from './prop-types';
import {Screen} from '../../reducer/reducer';

// eslint-disable-next-line react/display-name
const PlaceList = memo(({placeCards, onTitleClick, onHoverPlace, currentScreen}) => {
  return <>
    <div className={`${currentScreen === Screen.CARD_DETAIL ? `near-places__list` : `cities__places-list tabs__content`} places__list`}>
      {placeCards.map((item, index) =>
        <PlaceCard
          key={index + item}
          placeData={item}
          onTitleClick={onTitleClick}
          onHoverPlace={onHoverPlace}
        />)}
    </div>
  </>;
});

PlaceList.propTypes = propTypes;

export {PlaceList};

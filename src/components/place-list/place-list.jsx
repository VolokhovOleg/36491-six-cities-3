import PlaceCard from '../place-card/place-card';
import {propTypes} from './prop-types';

// eslint-disable-next-line react/display-name
const PlaceList = memo(({placeCards, currentScreen}) => {
  return <>
    {placeCards.map((item, index) =>
      <PlaceCard
        key={index + item.id + item.title}
        placeData={item}
        currentScreen={currentScreen}
      />)}
  </>;
});

PlaceList.propTypes = propTypes;

export default PlaceList;

import PlaceCard from '../place-card/place-card';
import {propTypes} from './prop-types';

// eslint-disable-next-line react/display-name
const PlaceList = memo(({placeCards}) => {
  return <>
    {placeCards.map((item, index) =>
      <PlaceCard
        key={index + item.id + item.title}
        placeData={item}
      />)}
  </>;
});

PlaceList.propTypes = propTypes;

export default PlaceList;

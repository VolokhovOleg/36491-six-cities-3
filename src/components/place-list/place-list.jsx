import PlaceCard from '../place-card/place-card';
import {propTypes} from './prop-types';

class PlaceList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {placeCards, onTitleClick, isDetailsPage, onHoverPlace} = this.props;

    return (<>
      <div className={`${isDetailsPage ? `near-places__list` : `cities__places-list tabs__content`} places__list`}>
        {placeCards.map((item, index) =>
          <PlaceCard
            key={index + item}
            placeData={item}
            isDetailsPage={isDetailsPage}
            onTitleClick={onTitleClick}
            onHoverPlace={onHoverPlace}
          />)}
      </div>
    </>);
  }
}

PlaceList.propTypes = propTypes;

export default PlaceList;

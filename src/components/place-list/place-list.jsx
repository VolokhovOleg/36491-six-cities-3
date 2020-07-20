import {PlaceCard} from '../place-card/place-card';
import {propTypes} from './prop-types';
import {SORTING_PROPERTY_NAME} from '../../reducer/data/data';
import {getSortingName} from '../../reducer/data/selectors';
import {connect} from 'react-redux';

class PlaceList extends PureComponent {
  _sortingCards(unSortingCards) {
    const {sortingName} = this.props;

    switch (sortingName) {
      case SORTING_PROPERTY_NAME.PriceToHigh:
        unSortingCards = unSortingCards.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10));
        break;
      case SORTING_PROPERTY_NAME.PriceToLow:
        unSortingCards = unSortingCards.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10));
        break;
      case SORTING_PROPERTY_NAME.Rate:
        unSortingCards = unSortingCards.sort((a, b) => b.rating - a.rating);
        break;
      case SORTING_PROPERTY_NAME.Popular:
        unSortingCards = unSortingCards.sort((a, b) => a.id - b.id);
        break;
    }

    return unSortingCards;
  }

  render() {
    const {placeCards, currentScreen} = this.props;

    return <>
      {this._sortingCards(placeCards).map((item, index) =>
        <PlaceCard
          key={index + item.id + item.title}
          placeData={item}
          currentScreen={currentScreen}
        />
      )}
    </>;
  }
}

PlaceList.propTypes = propTypes;

const mapStateToProps = (state) => ({
  sortingName: getSortingName(state),
});

export {PlaceList};

export default connect(mapStateToProps)(PlaceList);

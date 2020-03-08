import {ActionCreator} from '../../reducer/actions';
import {connect} from 'react-redux';

const SORTING_PROPERTY_NAME = {
  Popular: `Popular`,
  PriceToHight: `Price: low to high`,
  PriceToLow: `Price: high to low`,
  Rate: `Top rated first`,
};

class Sorting extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checkedSortingProperty: SORTING_PROPERTY_NAME.Popular,
      isSelectOpen: false,
    };
  }

  _toSortData(sortingProperty) {
    const {resortingData, placeCards, originPlaceCards} = this.props;
    let sortedData = placeCards;

    switch (sortingProperty) {
      case SORTING_PROPERTY_NAME.PriceToHight:
        sortedData = placeCards.sort((a, b) => parseInt(a.price.replace(`€`, ``), 10) - parseInt(b.price.replace(`€`, ``), 10));
        break;
      case SORTING_PROPERTY_NAME.PriceToLow:
        sortedData = placeCards.sort((a, b) => parseInt(b.price.replace(`€`, ``), 10) - parseInt(a.price.replace(`€`, ``), 10));
        break;
      case SORTING_PROPERTY_NAME.Rate:
        sortedData = placeCards.sort((a, b) => b.rating - a.rating);
        break;
      case SORTING_PROPERTY_NAME.Popular:
        sortedData = originPlaceCards;
        break;
      default:
        sortedData = originPlaceCards;
    }
    resortingData(sortedData);
  }

  render() {
    const {checkedSortingProperty, isSelectOpen} = this.state;

    return (<>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span onClick={(evt) => {
          evt.stopPropagation();
          this.setState(() => ({
            isSelectOpen: !isSelectOpen,
          }));
        }} className="places__sorting-type" tabIndex={0}>
          {checkedSortingProperty}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isSelectOpen ? `places__options--opened` : ``}`}>
          <li onClick={(evt) => {
            this._toSortData(evt.target.getAttribute(`data-sortby`));
          }} className="places__option places__option--active" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.Popular}>Popular
          </li>
          <li onClick={(evt) => {
            this._toSortData(evt.target.getAttribute(`data-sortby`));
          }} className="places__option" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.PriceToHight}>Price: low to
            high
          </li>
          <li onClick={(evt) => {
            this._toSortData(evt.target.getAttribute(`data-sortby`));
          }} className="places__option" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.PriceToLow}>Price: high to
            low
          </li>
          <li onClick={(evt) => {
            this._toSortData(evt.target.getAttribute(`data-sortby`));
          }} className="places__option" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.Rate}>Top rated first</li>
        </ul>
      </form>
    </>);
  }
}

const mapInitialProps = (state) => ({
  placeCards: state.placeCards,
  originPlaceCards: state.originPlaceCards,
});

const mapDispatchToProps = (dispatch) => ({
  resortingData(sortingPlaces) {
    dispatch(ActionCreator.setSortingPlaces(sortingPlaces));
  },
});

export {Sorting};

export default connect(mapInitialProps, mapDispatchToProps)(Sorting);

import {connect} from 'react-redux';
import {propTypes} from './prop-types';
import {getFiltered} from '../../reducer/data/selectors';
import {ActionCreator as DataActionCreator, Operation as DataOperation} from '../../reducer/data/data';

const SORTING_PROPERTY_NAME = {
  Popular: `Popular`,
  PriceToHigh: `Price: low to high`,
  PriceToLow: `Price: high to low`,
  Rate: `Top rated first`,
};
const DEFAULT_PROPERTY = SORTING_PROPERTY_NAME.Popular;

class Sorting extends PureComponent {
  constructor(props) {
    super(props);
    const {onChangeProperty} = this.props;
    onChangeProperty(DEFAULT_PROPERTY);
  }

  _toSortData(sortingProperty) {
    const {resortingData, setOriginCards, placeCards, onDropdownClick, onChangeProperty} = this.props;

    switch (sortingProperty) {
      case SORTING_PROPERTY_NAME.PriceToHigh:
        resortingData(placeCards.sort((a, b) => parseInt(a.price, 10) - parseInt(b.price, 10)));
        break;
      case SORTING_PROPERTY_NAME.PriceToLow:
        resortingData(placeCards.sort((a, b) => parseInt(b.price, 10) - parseInt(a.price, 10)));
        break;
      case SORTING_PROPERTY_NAME.Rate:
        resortingData(placeCards.sort((a, b) => b.rating - a.rating));
        break;
      case SORTING_PROPERTY_NAME.Popular:
        setOriginCards();
        break;
      default:
        setOriginCards();
    }

    onChangeProperty(sortingProperty);
    onDropdownClick();
  }

  render() {
    const {onDropdownClick, isDropdownOpen, selectProperty} = this.props;

    return (<>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span onClick={(evt) => {
          evt.stopPropagation();
          onDropdownClick();
        }} className="places__sorting-type" tabIndex={0}>
          {selectProperty}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isDropdownOpen ? `places__options--opened` : ``}`}>
          <li onClick={(evt) => {
            this._toSortData(evt.target.getAttribute(`data-sortby`));
            onDropdownClick();
          }} className="places__option places__option--active" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.Popular}>Popular
          </li>
          <li onClick={(evt) => {
            this._toSortData(evt.target.getAttribute(`data-sortby`));
            onDropdownClick();
          }} className="places__option" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.PriceToHigh}>Price: low to
            high
          </li>
          <li onClick={(evt) => {
            this._toSortData(evt.target.getAttribute(`data-sortby`));
            onDropdownClick();
          }} className="places__option" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.PriceToLow}>Price: high to
            low
          </li>
          <li onClick={(evt) => {
            this._toSortData(evt.target.getAttribute(`data-sortby`));
            onDropdownClick();
          }} className="places__option" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.Rate}>Top rated first</li>
        </ul>
      </form>
    </>);
  }
}

const mapStateToProps = (state) => ({
  placeCards: getFiltered(state),
});

const mapDispatchToProps = (dispatch) => ({
  resortingData(sortingPlaces) {
    dispatch(DataActionCreator.setFilteredPlaces(sortingPlaces));
  },
  setOriginCards() {
    dispatch(DataOperation.setFilteredPlaces());
  },
});

Sorting.propTypes = propTypes;

export {Sorting};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);

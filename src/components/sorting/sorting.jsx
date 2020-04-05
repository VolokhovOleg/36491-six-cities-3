import {connect} from 'react-redux';
import {propTypes} from './prop-types';
import {Operation as DataOperation, SORTING_PROPERTY_NAME} from '../../reducer/data/data';
import {getSortingName} from '../../reducer/data/selectors';

// eslint-disable-next-line react/display-name
const Sorting = memo(({onDropdownClick, isDropdownOpen, sortingName, resortingData}) => {
  return (<>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span onClick={(evt) => {
          evt.stopPropagation();
          onDropdownClick();
        }} className="places__sorting-type" tabIndex={0}>
          {sortingName}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select"/>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isDropdownOpen ? `places__options--opened` : ``}`}>
          <li onClick={(evt) => {
            onDropdownClick();
            resortingData(evt.target.getAttribute(`data-sortby`));
          }} className="places__option places__option--active" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.Popular}>Popular
          </li>
          <li onClick={(evt) => {
            onDropdownClick();
            resortingData(evt.target.getAttribute(`data-sortby`));
          }} className="places__option" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.PriceToHigh}>Price: low to
            high
          </li>
          <li onClick={(evt) => {
            onDropdownClick();
            resortingData(evt.target.getAttribute(`data-sortby`));
          }} className="places__option" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.PriceToLow}>Price: high to
            low
          </li>
          <li onClick={(evt) => {
            onDropdownClick();
            resortingData(evt.target.getAttribute(`data-sortby`));
          }} className="places__option" tabIndex="{0}" data-sortby={SORTING_PROPERTY_NAME.Rate}>Top rated first</li>
        </ul>
      </form>
    </>);
});

const mapStateToProps = (state) => ({
  sortingName: getSortingName(state),
});

const mapDispatchToProps = (dispatch) => ({
  resortingData(sortingBy) {
    dispatch(DataOperation.setOrderBySorting(sortingBy));
  },
});

Sorting.propTypes = propTypes;

export {Sorting};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);

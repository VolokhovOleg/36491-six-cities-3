import {propTypes} from './prop-types';
import {getActiveCity} from '../../reducer/hotels/selectors';
import {connect} from 'react-redux';
import {Operation as DataOperations, ActionCreator as DataActionCreator} from '../../reducer/hotels/hotels';

// eslint-disable-next-line react/display-name
const City = memo(({name, activeCity, onCityClick}) => {
  return <>
    <li onClick={(evt) => {
      evt.stopPropagation();
      onCityClick(name);
    }
    }
    className="locations__item">
      <a className={`locations__item-link tabs__item ${name === activeCity ? `tabs__item--active` : ``} `}>
        <span>{name}</span>
      </a>
    </li>
  </>;
});

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(name) {
    dispatch(DataActionCreator.setActiveCity(name));
    dispatch(DataOperations.setFilteredPlacesByCity());
  },
});

City.propTypes = propTypes;

export {City};
export default connect(mapStateToProps, mapDispatchToProps)(City);

import City from '../city/city';
import {propTypes} from './prop-types';
import {getCities} from '../../reducer/data/selectors';
import {connect} from 'react-redux';

const MAX_CITIES_TO_RENDER = 6;

// eslint-disable-next-line react/display-name
const CityList = memo(({cities}) => {
  return <>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities
            .slice(0, MAX_CITIES_TO_RENDER)
            .map((item, index) =>
              <City
                key={index + item}
                name={item}
              />
            )}
        </ul>
      </section>
    </div>
  </>;
});

const mapStateToProps = (state) => ({
  cities: getCities(state),
});

CityList.propTypes = propTypes;

export {CityList};
export default connect(mapStateToProps)(CityList);

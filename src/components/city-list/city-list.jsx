import City from '../city/city';
import {propTypes} from './prop-types';

// eslint-disable-next-line react/display-name
const CityList = memo(({cities, activeCity, onCityClick}) => {
  return <>
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities
            .slice(0, 6)
            .map((item, index) =>
              <City
                key={index + item}
                name={item}
                onCityClick={onCityClick}
                state={activeCity === item}
              />
            )}
        </ul>
      </section>
    </div>
  </>;
});

CityList.propTypes = propTypes;

export default CityList;

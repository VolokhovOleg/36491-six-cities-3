import City from '../city/city';

const CityList = ({cities, activeCity, onCityClick}) => {
  return (<>
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
  </>);
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  activeCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default CityList;

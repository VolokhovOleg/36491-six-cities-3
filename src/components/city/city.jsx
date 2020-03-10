import {propTypes} from './prop-types';

const City = ({name, state, onCityClick})=> {
  return (<>
    <li onClick={(evt) => {
      evt.stopPropagation();
      onCityClick(name);
    }
    }
    className="locations__item">
      <a className={`locations__item-link tabs__item ${state ? `tabs__item--active` : ``} `}>
        <span>{name}</span>
      </a>
    </li>
  </>);
};

City.propTypes = propTypes;

export default City;

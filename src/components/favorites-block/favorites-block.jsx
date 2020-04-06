import FavoritesCard from '../favorites-card/favorites-card';
import {propTypes} from '../favorites-list/prop-types';

const FavoritesBlock = ({name, favorites}) => {
  return <>
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((item) =>
          <FavoritesCard
            key={item.id}
            data={item}
          />
        )}
      </div>
    </li>
  </>;
};

FavoritesBlock.propTypes = propTypes;

export default FavoritesBlock;

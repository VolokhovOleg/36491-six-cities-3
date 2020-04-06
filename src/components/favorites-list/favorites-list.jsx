import FavoritesBlock from '../favorites-block/favorites-block';
import {propTypes} from './prop-types';

const FavoritesList = ({favorites}) => {
  return <>
    <ul className="favorites__list">
      {
        [...new Set(favorites.map((item) => item.city))]
        .map((name) => favorites
        .filter((item) => item.city === name))
        .map((item) =>
          <FavoritesBlock
            key={item[0].id}
            name={item[0].city}
            favorites={item}
          />
        )
      }
    </ul>
  </>;
};

FavoritesList.propTypes = propTypes;

export default FavoritesList;

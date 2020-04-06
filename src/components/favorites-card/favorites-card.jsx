import {convertRating} from '../../utils';
import {ActionCreator as DataActionCreator} from '../../reducer/data/actions';
import {Operation as MapOperation} from '../../reducer/map/map';
import {Operation as DataOperation} from '../../reducer/data/data';
import {Operation as ReviewOperation} from '../../reducer/reviews/reviews';
import {connect} from 'react-redux';
import {propTypes} from './prop-types';

const FavoritesCard = ({data, onFavoriteButtonClick, onTitleClick}) => {
  const {img, price, title, type, rating, isFavorite, id} = data;

  return <>
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width={150} height={110} alt={title} />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            onClick={(evt) => {
              evt.preventDefault();
              onFavoriteButtonClick(id, !isFavorite);
            }}
            className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: convertRating(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick={(evt) => {
            evt.preventDefault();
            onTitleClick(id);
          }
          }
          href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  </>;
};

FavoritesCard.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
  onTitleClick(id) {
    dispatch(DataActionCreator.setCardDetailsID(id));
    dispatch(MapOperation.setActivePin(id));
    dispatch(DataOperation.setNearPinsLocations(id));
    dispatch(ReviewOperation.setComments(id));
  },
  onFavoriteButtonClick(id, state) {
    dispatch(DataOperation.postFavorite(id, state));
  },
});

export {FavoritesCard};
export default connect(null, mapDispatchToProps)(FavoritesCard);

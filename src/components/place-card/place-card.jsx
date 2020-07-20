import {convertRating} from '../../utils';
import {propTypes} from './prop-types';
import {Screen} from '../../reducer/screens/screens';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Operation as DataOperation} from '../../reducer/data/data';
import {Operation as MapOperation} from '../../reducer/map/map';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../reducer/user/user';

const PlaceCard = ({placeData, currentScreen, authorizationStatus, onHoverPlace, onFavoriteButtonClick}) => {
  const {img, price, title, type, isPremium, rating, isFavorite, id} = placeData;
  // попробовать сделать класс компонент
  // Забить на хоки, всё починить, дотюнить по тз, потом хоки.
  console.log(authorizationStatus);

  return <>
    <article
      onMouseEnter={() => {
        return onHoverPlace(id);
      }}
      onMouseLeave={() => {
        return onHoverPlace(null);
      }}
      className={`${currentScreen === Screen.MAIN
        ? `near-places__card`
        : `cities__place-card`} place-card`}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={img} width={260} height={200} alt={title} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          {authorizationStatus === AuthorizationStatus.AUTH
            ? <button
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
            : <Link to='/login'>
              <button
                className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
                <svg className="place-card__bookmark-icon" width={18} height={19}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </Link>}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: convertRating(rating)}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            to={`/offer/${id}`}>{title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  </>;
};

PlaceCard.propTypes = propTypes;

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(id, state) {
    dispatch(DataOperation.postFavorite(id, state));
  },
  onHoverPlace(id) {
    dispatch(MapOperation.setActivePin(id));
  },
});

export {PlaceCard};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);

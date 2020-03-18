import {convertRating} from '../../utils';
import {propTypes} from './prop-types';
import {Screen} from '../../reducer/reducer';
import {connect} from 'react-redux';

// eslint-disable-next-line react/display-name
const PlaceCard = memo(({placeData, onTitleClick, onHoverPlace, currentScreen}) => {
  const {img, price, title, type, isPremium, rating, isFavorite} = placeData;
  return <>
    <article
      onMouseEnter={() => {
        return currentScreen === Screen.MAIN ? onHoverPlace(placeData) : null;
      }}
      onMouseLeave={() => {
        return currentScreen === Screen.MAIN ? onHoverPlace(null) : null;
      }} className={`${currentScreen === Screen.MAIN ? `near-places__card` : `cities__place-card`} place-card`}>
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
          <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
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
            onTitleClick(placeData);
          }
          }
          href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  </>;
});

PlaceCard.propTypes = propTypes;

const mapInitialProps = (state) => ({
  currentScreen: state.currentScreen,
});

export {PlaceCard};

export default connect(mapInitialProps)(PlaceCard);

import {convertRating} from '../../utils';

const PlaceCard = ({placeData, onTitleClick, onHoverPlace, isDetailsPage}) => {
  const {link, img, price, title, type, isPremium, rating} = placeData;
  return <>
    <article
      onMouseEnter={() => {
        onHoverPlace(placeData);
      }}
      onMouseLeave={() => {
        onHoverPlace(null);
      }} className={`${isDetailsPage ? `near-places__card` : `cities__place-card`} place-card`}>
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={link}>
          <img className="place-card__image" src={img} width={260} height={200} alt={title} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
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
          href={link}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  </>;
};

PlaceCard.propTypes = {
  placeData: PropTypes.shape({
    link: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  isDetailsPage: PropTypes.bool.isRequired,
};

export default PlaceCard;

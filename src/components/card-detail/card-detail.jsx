import {convertRating} from '../../utils';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import {PlaceList} from '../place-list/place-list';
import {propTypes} from './prop-types';
import {getNearLocations} from '../../reducer/map/selectors';
import {connect} from 'react-redux';

const CardDetail = ({placeData, reviews, nearLocations}) => {
  const {
    gallery,
    price,
    title,
    type,
    bedrooms,
    maxAdults,
    inside,
    isPremium,
    rating,
    host,
    isFavorite
  } = placeData;
  // reviews={reviews}
  // placeCards={placeCards.filter((item) => item.city === activeCity).slice(0, 3)}
  // cities={placeCards.filter((item) => item.city === activeCity)}
  const {avatar, name, hostDescription, isPro} = host;
  const sortingReviews = reviews.sort((a, b) => b.date - a.date);

  return <>
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {gallery.map((item, index) => (
                <div key={index + item} className="property__image-wrapper">
                  <img className="property__image" src={item} alt={`Photo ${type}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: convertRating(rating)}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedroom{bedrooms === 1 ? `` : `s`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What`s inside</h2>
                <ul className="property__inside-list">
                  {inside.map((item, index) => (
                    <li key={index + item} className="property__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatar} width={74} height={74} alt={name} />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{hostDescription}</p>
                </div>
              </div>
              {/*<ReviewList*/}
              {/*  reviews={sortingReviews.slice(0, 10)}*/}
              {/*/>*/}
            </div>
          </div>
          <Map
            locations={nearLocations}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlaceList />
          </section>
        </div>
      </main>
    </div>
  </>;
};

const mapInitialProps = (state) => ({
  nearLocations: getNearLocations(state),
});

CardDetail.propTypes = propTypes;

export {CardDetail};
export default connect(mapInitialProps)(CardDetail);

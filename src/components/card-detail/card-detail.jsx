import {convertRating} from '../../utils';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import PlaceList from '../place-list/place-list';
import {propTypes} from './prop-types';
import {getHotels, getNearLocationsState, getNearPlaces} from '../../reducer/data/selectors';
import {getReviewsState} from '../../reducer/reviews/selectors';
import {connect} from 'react-redux';
import {ActionCreator as DataActionCreator, Operation as DataOperation} from '../../reducer/data/data';
import {Link} from 'react-router-dom';
import {Screen} from '../../reducer/screens/screens';
import {AuthorizationStatus} from '../../reducer/user/user';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {Operation as MapOperation} from '../../reducer/map/map';
import {Operation as ReviewOperation} from '../../reducer/reviews/reviews';
import {Header} from '../header/header';

class CardDetail extends PureComponent {
  constructor(props) {
    super(props);
    this._setUp();
  }

  _setUp() {
    const {match, init, placeCards} = this.props;
    this._id = parseInt(match.params.id, 10);
    this._placeData = placeCards.filter((item) => item.id === this._id)[0];
    this._activeCityName = this._placeData.city;
    init(this._id, this._activeCityName);
  }

  componentDidUpdate() {
    const {match} = this.props;
    if (this._id !== parseInt(match.params.id, 10)) {
      this._setUp();
    }
  }

  render() {
    const {isReviewsLoad, isNearLocationLoad, nearPlaces, onFavoriteButtonClick, authorizationStatus} = this.props;
    const {
      id,
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
    } = this._placeData;
    const {avatar, name, hostDescription, isPro} = host;

    return (<>
      <div className="page">
        <Header/>
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
                      <img className="property__avatar user__avatar" src={`../${avatar}`} width={74} height={74} alt={name} />
                    </div>
                    <span className="property__user-name">
                      {name}
                    </span>
                    {
                      isPro
                      && <span className="property__user-status">
                        Pro
                      </span>
                    }
                  </div>
                  <div className="property__description">
                    <p className="property__text">{hostDescription}</p>
                  </div>
                </div>
                {isReviewsLoad
                  && <ReviewList />}
              </div>
            </div>
            {isNearLocationLoad
            && <Map
              currentScreen={Screen.CARD_DETAIL}
            />}
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              {isNearLocationLoad
              && <div className="near-places__list tabs__content places__list`}">
                <PlaceList
                  currentScreen={Screen.CARD_DETAIL}
                  placeCards={nearPlaces}
                />
              </div>
              }
            </section>
          </div>
        </main>
      </div>
    </>);
  }
}

const mapStateToProps = (state) => ({
  placeCards: getHotels(state),
  isReviewsLoad: getReviewsState(state),
  isNearLocationLoad: getNearLocationsState(state),
  nearPlaces: getNearPlaces(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(id, state) {
    dispatch(DataOperation.postFavorite(id, state));
  },
  init(id, activeCityName) {
    dispatch(DataActionCreator.setCardDetailsID(id));
    dispatch(DataActionCreator.setActiveCity(activeCityName));
    dispatch(MapOperation.setActivePin(id));
    dispatch(DataOperation.setNearPinsLocations(id));
    dispatch(ReviewOperation.setComments(id));
    dispatch(DataOperation.setActiveCityZoom());
    dispatch(DataOperation.setActiveCityLocation());
  },
});

CardDetail.propTypes = propTypes;

export {CardDetail};
export default connect(mapStateToProps, mapDispatchToProps)(CardDetail);

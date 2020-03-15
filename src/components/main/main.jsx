import {PlaceList} from '../place-list/place-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import EmptyMain from '../empty-main/empty-main';
import {propTypes} from './prop-types';
import Sorting from '../sorting/sorting';
import withSorting from '../../hocs/with-sorting/with-sorting';

const SortingWrapped = withSorting(Sorting);

const Main = ({placeCards, placesToStay, onTitleClick, activeCity, onCityClick, onHoverPlace, cities}) => {
  const locations = placeCards.map((item) => item.locations);
  return <>
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
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
      {
        placeCards.length === 0
        && <EmptyMain />
        ||
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          {
            cities !== null
            && <CityList
              cities={cities}
              activeCity={activeCity}
              onCityClick={onCityClick}
            />
          }
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesToStay} place{placesToStay > 1 ? `s` : ``} to stay
                  in {activeCity}</b>
                <SortingWrapped>
                  <Sorting />
                </SortingWrapped>
                <PlaceList
                  placeCards={placeCards}
                  isDetailsPage={false}
                  onTitleClick={onTitleClick}
                  onHoverPlace={onHoverPlace}
                />
              </section>
              <div className="cities__right-section">
                {placeCards.length > 0
                  &&
                  <Map
                    locations={locations}
                    isDetailsPage={false}
                    city={placeCards.find((item) => item.city === activeCity).cityMapProps.location}
                    zoom={placeCards.find((item) => item.city === activeCity).cityMapProps.zoom}
                  />}
              </div>
            </div>
          </div>
        </main>
      }
    </div>
  </>;
};

Main.propTypes = propTypes;

export default Main;

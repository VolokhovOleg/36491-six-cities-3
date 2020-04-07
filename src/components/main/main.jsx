import Map from '../map/map';
import CityList from '../city-list/city-list';
import PlaceList from '../place-list/place-list';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import EmptyMain from '../empty-main/empty-main';
import Loading from '../loading/loading';
import User from '../user/user';
import Sorting from '../sorting/sorting';
import withSorting from '../../hocs/with-sorting/with-sorting';
import {getFiltered, getActiveCity, getPlacesToStay, getApp} from '../../reducer/data/selectors';
import {propTypes} from './prop-types';
import {Screen} from '../../reducer/screens/screens';

const SortingWrapped = withSorting(Sorting);

const Main = ({placeCards, activeCity, cities, placesToStay, isAppLoad}) => {
  return <>
    {
      !isAppLoad
        ? <Loading />
        : <div className="page page--gray page--main">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Link to='/' className="header__logo-link header__logo-link--active">
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                  </Link>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <User />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          {
            !placeCards.length
            && <EmptyMain />
            || <main className="page__main page__main--index">
              <h1 className="visually-hidden">Cities</h1>
              {
                cities !== null
                && <CityList />
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
                    <div className="cities__places-list tabs__content places__list">
                      <PlaceList
                        placeCards={placeCards}
                        currentScreen={Screen.MAIN}
                      />
                    </div>
                  </section>
                  <div className="cities__right-section">
                    <Map
                      currentScreen={Screen.MAIN}
                    />
                  </div>
                </div>
              </div>
            </main>
          }
        </div>
    }
  </>;
};

const mapStateToProps = (state) => ({
  placeCards: getFiltered(state),
  activeCity: getActiveCity(state),
  placesToStay: getPlacesToStay(state),
  isAppLoad: getApp(state),
});

Main.propTypes = propTypes;

export {Main};
export default connect(mapStateToProps)(Main);

import Map from '../map/map';
import CityList from '../city-list/city-list';
import PlaceList from '../place-list/place-list';
import {connect} from 'react-redux';
import EmptyMain from '../empty-main/empty-main';
import Sorting from '../sorting/sorting';
import withDropdown from '../../hocs/with-dropdown/with-dropdown';
import {getFiltered, getActiveCity, getPlacesToStay} from '../../reducer/data/selectors';
import {propTypes} from './prop-types';
import {Screen} from '../../reducer/screens/screens';
import {Header} from '../header/header';

const SortingWrapped = withDropdown(Sorting);

const Main = ({placeCards, activeCity, cities, placesToStay}) => {
  return <>
    <div className="page page--gray page--main">
      <Header/>
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
  </>;
};

const mapStateToProps = (state) => ({
  placeCards: getFiltered(state),
  activeCity: getActiveCity(state),
  placesToStay: getPlacesToStay(state),
});

Main.propTypes = propTypes;

export {Main};
export default connect(mapStateToProps)(Main);

import FavoritesList from '../favorites-list/favorites-list';
import Loading from '../loading/loading';
import {getApp, getFavoritesCards} from '../../reducer/data/selectors';
import {propTypes} from './prop-types';
import {connect} from 'react-redux';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {Header} from '../header/header';
import {Footer} from '../footer/footer';

const Favorites = ({isAppLoad, favoritesCards}) => {
  return <>
    {
      !isAppLoad
        ? <Loading />
        : !favoritesCards.length
        && <FavoritesEmpty />
        || <div className="page">
          <Header/>
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList
                  favorites={favoritesCards}
                />
              </section>
            </div>
          </main>
          <Footer/>
        </div>
    }
  </>;
};

const mapStateToProps = (state) => ({
  isAppLoad: getApp(state),
  favoritesCards: getFavoritesCards(state),
});

Favorites.propTypes = propTypes;

export {Favorites};
export default connect(mapStateToProps)(Favorites);

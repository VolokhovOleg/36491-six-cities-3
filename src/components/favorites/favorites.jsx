import FavoritesList from '../favorites-list/favorites-list';
import Loading from '../loading/loading';
import {getApp, getFavoritesCards} from '../../reducer/data/selectors';
import {propTypes} from './prop-types';
import {connect} from 'react-redux';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import User from '../user/user';
import {Link} from 'react-router-dom';

const Favorites = ({isAppLoad, favoritesCards}) => {
  return <>
    {
      !isAppLoad
        ? <Loading />
        : !favoritesCards.length
        && <FavoritesEmpty />
        || <div className="page">
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
          <footer className="footer container">
            <Link to='/' className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </footer>
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

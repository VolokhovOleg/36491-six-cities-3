import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import Login from '../login/login';
import CardDetail from '../card-detail/card-detail';
import {propTypes} from './prop-types';
import {Operation as DataOperation} from '../../reducer/data/data';
import {Operation as UserOperation} from '../../reducer/user/user';
import Favorites from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';
import {AuthorizationStatus} from '../../reducer/user/user';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import EmptyMain from '../empty-main/empty-main';
import {getApp} from '../../reducer/data/selectors';
import Loading from '../loading/loading';

class App extends PureComponent {
  constructor(props) {
    super(props);
    const {init} = this.props;
    init();
  }

  render() {
    const {authorizationStatus, isAppLoad} = this.props;
    return (<>
      {!isAppLoad
        ? <Loading />
        : <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/' component={Main} />
            <Route exact match path='/offer/:id' component={CardDetail} />
            <PrivateRoute
              require={authorizationStatus === AuthorizationStatus.AUTH}
              to='/login'
              exact path='/favorites'
              render={() => <Favorites />}
            />
            <Route path='/favorites' exact component={Favorites} />
            <Route path='/empty-main' exact component={EmptyMain} />
          </Switch>
        </BrowserRouter>
      }
    </>);
  }
}

App.propTypes = propTypes;

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isAppLoad: getApp(state),
});

const mapDispatchToProps = (dispatch) => ({
  init() {
    dispatch(UserOperation.checkUserData());
    dispatch(DataOperation.init());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

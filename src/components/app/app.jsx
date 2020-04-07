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

class App extends PureComponent {
  componentDidMount() {
    const {init} = this.props;
    return init();
  }

  render() {
    const {authorizationStatus} = this.props;
    return (<>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Main} />
          <Route exact path='/offer/:id' component={CardDetail} />
          <PrivateRoute
            require={authorizationStatus === AuthorizationStatus.AUTH}
            to='/login'
            exact path='/favorites'
            render={() => <Favorites />}
          />
          <Route path='/favorites' exact component={Favorites} />
        </Switch>
      </BrowserRouter>
    </>);
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  init() {
    dispatch(UserOperation.checkUserData());
    dispatch(DataOperation.init());
  }
});

App.propTypes = propTypes;

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

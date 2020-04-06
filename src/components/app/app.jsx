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

class App extends PureComponent {
  componentDidMount() {
    const {init} = this.props;
    return init();
  }

  render() {
    return (<>
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={Main} />
          <Route exact path='/offer/:id' component={CardDetail} />
          <Route path='/favorites' exact component={Favorites} />
        </Switch>
      </BrowserRouter>
    </>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  init() {
    dispatch(UserOperation.checkUserData());
    dispatch(DataOperation.init());
  }
});

App.propTypes = propTypes;

export {App};
export default connect(null, mapDispatchToProps)(App);

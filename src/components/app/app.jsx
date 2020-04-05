import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import CardDetail from '../card-detail/card-detail';
import {propTypes} from './prop-types';
import {Screen} from '../../reducer/screens/screens';
import {getScreen} from '../../reducer/screens/selectors';
import {Operation as DataOperation} from '../../reducer/data/data';

class App extends PureComponent {

  componentDidMount() {
    const {init} = this.props;
    init();
  }

  _renderMainScreen() {
    const {currentScreen} = this.props;

    switch (currentScreen) {
      case Screen.CARD_DETAIL:
        return <CardDetail />;
      case Screen.MAIN:
        return <Main />;
    }

    return null;
  }

  render() {
    return (<>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderMainScreen()}
          </Route>
        </Switch>
      </BrowserRouter>
    </>);
  }
}

const mapStateToProps = (state) => ({
  currentScreen: getScreen(state),
});

const mapDispatchToProps = (dispatch) => ({
  init() {
    dispatch(DataOperation.init());
  }
});

App.propTypes = propTypes;

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

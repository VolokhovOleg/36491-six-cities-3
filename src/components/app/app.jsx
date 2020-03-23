import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from '../main/main';
import CardDetail from '../card-detail/card-detail';
import {propTypes} from './prop-types';
import {getScreen} from '../../reducer/screens/selectors';
import {Screen} from '../../reducer/screens/screens';

const App = ({currentScreen}) => {
  const renderMainScreen = () => {
    switch (true) {
      case currentScreen === Screen.CARD_DETAIL:
        return <CardDetail />;
      case currentScreen === Screen.MAIN:
        return <Main />;
    }

    return null;
  };

  return (<>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {renderMainScreen()}
        </Route>
      </Switch>
    </BrowserRouter>
  </>);
};

const mapStateToProps = (state) => ({
  currentScreen: getScreen(state),
});

App.propTypes = propTypes;

export {App};
export default connect(mapStateToProps)(App);

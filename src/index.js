import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer, AuthorizationStatus, Operation as DataOperation} from './reducer/reducer';
import {ActionCreator} from './reducer/actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createAPI} from './api.js';
import thunk from 'redux-thunk';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />,
    </Provider>,
    document.getElementById(`root`)
);

store.dispatch(DataOperation.setHotels());

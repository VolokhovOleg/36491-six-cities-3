import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './api';
import {ActionCreator as UserActionCreator} from './reducer/user/actions';

const onFailState = (status) => store.dispatch(UserActionCreator.requireAuthorization(status));
const api = createAPI(onFailState);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);

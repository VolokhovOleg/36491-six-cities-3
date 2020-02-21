import ReactDOM from 'react-dom';
import App from './components/app/app';
import {placeCards} from './mocks/offers';

ReactDOM.render(
    <App
      placeCards = {placeCards}
    />,
    document.getElementById(`root`)
);

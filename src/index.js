import ReactDOM from 'react-dom';
import App from './components/app/app';
import {placeCards} from './mocks/offers';
import {reviews} from './mocks/reviews';

ReactDOM.render(
    <App
      placeCards = {placeCards}
      reviews = {reviews}
    />,
    document.getElementById(`root`)
);

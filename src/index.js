import ReactDOM from 'react-dom';
import App from './components/app/app';

const placeCards = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

ReactDOM.render(
    <App
      placeCards = {placeCards}
    />,
    document.getElementById(`root`)
);

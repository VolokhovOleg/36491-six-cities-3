import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const placeCards = [
  `Wood at great location`,
  `Wood location place`,
  `Nice, big location apartment`,
];

it(`<App /> snapshot`, () => {
  const tree = renderer
    .create(<App
      placeCards = {placeCards}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

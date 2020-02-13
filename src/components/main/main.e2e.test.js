import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const placeCards = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        placesToStay = {312}
        placeCards = {placeCards}
        onTitleClick = {onTitleClick}
      />
  );

  main.find(`.place-card__name a`).map((item) => {
    item.props().onClick();
    return expect(onTitleClick.mock.calls.length).toBe(1);
  });
});

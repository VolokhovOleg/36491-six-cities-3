import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be pressed`, () => {
  const placeCardTitle = `Beautiful & luxurious apartment at great location`;
  const onTitleClick = jest.fn();

  const main = shallow(
      <PlaceCard
        placesTitle = {placeCardTitle}
        onTitleClick = {onTitleClick}
      />
  );

  const cardTitle = main.find(`.place-card__name a`);

  cardTitle.props().onClick();
  expect(onTitleClick.mock.calls.length).toBe(1);
});

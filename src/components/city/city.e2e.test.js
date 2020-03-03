import City from './city';

const name = `Moscow`;

it(`Should city be clicked`, () => {
  const onCityClick = jest.fn();

  const main = shallow(
      <City
        onCityClick = {onCityClick}
        state={true}
        name={name}
      />
  );

  const cardTitle = main.find(`.locations__item`);

  cardTitle.simulate(`click`, {stopPropagation() {}});

  expect(onCityClick.mock.calls.length).toBe(1);
});

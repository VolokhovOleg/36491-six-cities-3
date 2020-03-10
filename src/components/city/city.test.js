import City from './city';

const onCityClick = () => {};
const name = `Moscow`;

it(`<City /> snapshot`, () => {
  const tree = renderer
    .create(<City
      onCityClick={onCityClick}
      name={name}
      state={false}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

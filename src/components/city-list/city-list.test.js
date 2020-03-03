import CityList from './city-list';

const onCityClick = () => {};
const cities = [`Moscow`, `Amsterdam`];
const activeCity = `Amsterdam`;

it(`<City /> snapshot`, () => {
  const tree = renderer
    .create(<CityList
      activeCity={activeCity}
      cities={cities}
      onCityClick={onCityClick}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

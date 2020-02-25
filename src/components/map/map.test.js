import Map from 'map';

const mockLocations = [
  [52.3909553943508, 4.85309666406198],
  [52.369553943508, 4.85309666406198],
  [52.3909553943508, 4.929309666406198],
  [52.3809553943508, 4.939309666406198]
];
const mockCityLocation = [52.38333, 4.9];

it(`<Map /> snapshot`, () => {
  const tree = renderer
    .create(<Map
      offerCords={mockLocations}
      city={mockCityLocation}
    />, {
      createNodeMock: () => document.createElement(`div`)
    }).toJSON();

  expect(tree).toMatchSnapshot();
});

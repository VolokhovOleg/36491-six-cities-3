import Map from './map';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

describe(`<Map/>`, () => {
  const mockStore = configureStore([]);

  const cityCoords = [52.38333, 4.9];
  const activePin = [52.3909553943508, 4.85309666406198];
  const mockLocations = [
    [52.3909553943508, 4.85309666406198],
    [52.369553943508, 4.85309666406198],
    [52.3909553943508, 4.929309666406198],
    [52.3809553943508, 4.939309666406198],
  ];

  const store = mockStore({
    activePin,
  });
  it(`should render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Map
              locations={mockLocations}
              city={cityCoords}
            />
          </Provider>,
          {createNodeMock: () => document.createElement(`section`)}
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import leaflet from 'leaflet';
import {propTypes} from './prop-types';
import {connect} from 'react-redux';
import {Screen} from '../../reducer/reducer';

const tileLayer = {
  URL: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
    this._map = null;
    this._pins = [];
  }

  _generatePin(active) {
    return leaflet.icon({
      iconUrl: `img/pin${active ? `-active` : ``}.svg`,
      iconSize: [30, 30]
    });
  }

  _setOptions() {
    const {city, zoom} = this.props;

    return {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    };
  }

  componentDidMount() {
    this._map = leaflet.map(this.mapRef.current, this._setOptions());
    const {locations, city, zoom} = this.props;
    this._locations = locations;
    this._map.setView(city, zoom);

    leaflet
      .tileLayer(tileLayer.URL, {
        attribution: tileLayer.ATTRIBUTION
      })
      .addTo(this._map);

    this._setCoordinates(this._locations);
  }

  render() {
    const {currentScreen} = this.props;
    return (<>
      <section ref={this.mapRef} className={`${currentScreen === Screen.CARD_DETAIL ? `property` : `cities`}__map map`} id="map" />
    </>);
  }

  componentDidUpdate() {
    const {locations, zoom, city} = this.props;
    this._map.setView(city, zoom);

    this._pins.forEach((item) => {
      this._map.removeLayer(item);
    });

    this._setCoordinates(locations);
  }

  componentWillUnmount() {
    this._map.remove();
  }

  _setCoordinates(locations) {
    const {activePin} = this.props;

    this._pins = locations.map((item) => {
      return leaflet
        .marker(item, {icon: this._generatePin(false)})
        .addTo(this._map);
    });

    if (activePin !== null) {
      this._pins.push(leaflet
        .marker(activePin, {icon: this._generatePin(true)})
        .addTo(this._map));
    }
  }
}

Map.propTypes = propTypes;

const mapInitialProps = (state) => ({
  activePin: state.activePin,
  zoom: state.activeCityZoom,
  city: state.activeCityLocation,
  currentScreen: state.currentScreen,
});

export {Map};
export default connect(mapInitialProps)(Map);

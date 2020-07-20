import leaflet from 'leaflet';
import {propTypes} from './prop-types';
import {connect} from 'react-redux';
import {Screen} from '../../reducer/screens/screens';
import {getCityLocation, getActiveCityZoom, getPinsLocation} from '../../reducer/data/selectors';
import {getActivePin} from '../../reducer/map/selectors';

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
    this._zoom = null;
    this._city = null;
  }

  _generatePin(item) {
    return leaflet.icon({
      iconUrl: `../img/pin${this._comparePinsLocations(item) ? `-active` : ``}.svg`,
      iconSize: [30, 30]
    });
  }

  _setOptions() {
    const {city, zoom} = this.props;
    this._zoom = zoom;
    this._city = city;
    return {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    };
  }

  _comparePinsLocations(pin) {
    const {activePin} = this.props;
    return activePin && pin[0] === activePin[0] && pin[1] === activePin[1];
  }

  render() {
    const {currentScreen} = this.props;

    return (<>
      <section ref={this.mapRef} className={`${currentScreen === Screen.CARD_DETAIL ? `property` : `cities`}__map map`} id="map" />
    </>);
  }

  componentDidMount() {
    const {locations, city, zoom} = this.props;
    this._map = leaflet.map(this.mapRef.current.id, this._setOptions());
    this._map.setView(city, zoom);

    leaflet
      .tileLayer(tileLayer.URL, {
        attribution: tileLayer.ATTRIBUTION
      }).addTo(this._map);
    this._setCoordinates(locations);
  }

  componentDidUpdate() {
    const {locations, zoom, city} = this.props;

    if (zoom !== this._zoom || city !== this._city) {
      this._zoom = zoom;
      this._city = city;
      this._map.setView(city, zoom);
    }

    this._pins.forEach((item) => this._map.removeLayer(item));

    this._setCoordinates(locations);
  }

  componentWillUnmount() {
    this._map.remove();
  }

  _setCoordinates(locations) {
    this._pins = locations.map((item) => {
      return leaflet
        .marker(item, {icon: this._generatePin(item)})
        .addTo(this._map);
    });
  }
}

Map.propTypes = propTypes;

const mapStateProps = (state) => ({
  activePin: getActivePin(state),
  zoom: getActiveCityZoom(state),
  city: getCityLocation(state),
  locations: getPinsLocation(state),
});

export {Map};
export default connect(mapStateProps)(Map);

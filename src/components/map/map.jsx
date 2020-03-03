import leaflet from 'leaflet';

const ZOOM = 12;
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
    const {city} = this.props;

    return {
      center: city,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    };
  }

  componentDidMount() {
    this._map = leaflet.map(this.mapRef.current, this._setOptions());
    const {locations, city} = this.props;
    this._locations = locations;
    this._map.setView(city, ZOOM);

    leaflet
      .tileLayer(tileLayer.URL, {
        attribution: tileLayer.ATTRIBUTION
      })
      .addTo(this._map);

    this._setCoordinates(this._locations);
  }

  render() {
    const {isDetailsPage = false} = this.props;

    return (<>
      <section ref={this.mapRef} className={`${isDetailsPage ? `property` : `cities`}__map map`} id="map" />
    </>);
  }

  componentDidUpdate() {
    const {locations} = this.props;

    this._pins.forEach((item) => {
      this._map.removeLayer(item);
    });

    this._setCoordinates(locations);
  }

  componentWillUnmount() {
    this._map.remove();
  }

  _setCoordinates(locations) {
    const {activeLocation} = this.props;

    this._pins = locations.map((item) => {
      return leaflet
        .marker(item, {icon: this._generatePin(false)})
        .addTo(this._map);
    });

    if (activeLocation.length > 0) {
      leaflet
        .marker(...activeLocation, {icon: this._generatePin(true)})
        .addTo(this._map);
    }
  }
}

Map.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  city: PropTypes.array.isRequired,
  activeLocation: PropTypes.array.isRequired,
  isDetailsPage: PropTypes.bool.isRequired,
};

export default Map;

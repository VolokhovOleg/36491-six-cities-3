import leaflet from 'leaflet';

const ZOOM = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  _generatePin(type) {
    return leaflet.icon({
      iconUrl: `img/pin${type ? `-active` : ``}.svg`,
      iconSize: [30, 30]
    });
  }

  componentDidMount() {
    const {locations, city, isDetailsPage} = this.props;

    const map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(city, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    locations.near.forEach((item) => {
      leaflet
        .marker(item, {icon: this._generatePin(false)})
        .addTo(map);
    });

    if (isDetailsPage) {
      leaflet
        .marker(locations.current, {icon: this._generatePin(true)})
        .addTo(map);
    }
  }

  render() {
    const {isDetailsPage} = this.props;

    return (<>
      <section ref={this.mapRef} className={`${isDetailsPage ? `property` : `cities`}__map map`} id="map" />
    </>);
  }
}

Map.propTypes = {
  locations: PropTypes.shape({
    current: PropTypes.array.isRequired,
    near: PropTypes.array.isRequired,
  }).isRequired,
  city: PropTypes.array.isRequired,
  isDetailsPage: PropTypes.bool.isRequired,
};

export default Map;

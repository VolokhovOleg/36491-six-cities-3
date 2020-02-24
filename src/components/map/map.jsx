import leaflet from 'leaflet';

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});
const zoom = 12;

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const {offerCords, city} = this.props;

    const map = leaflet.map(this.mapRef.current.id, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offerCords.forEach((item) => {
      leaflet
        .marker(item, {icon})
        .addTo(map);
    });
  }

  render() {
    return (<>
      <section ref={this.mapRef} className="cities__map map" id="map" />
    </>);
  }
}

Map.propTypes = {
  offerCords: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number.isRequired)
  ).isRequired,
  city: PropTypes.array.isRequired,
};

export default Map;

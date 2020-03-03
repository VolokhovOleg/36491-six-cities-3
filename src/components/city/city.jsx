class City extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, state, onCityClick} = this.props;

    return (<>
      <li onClick={(evt) => {
        evt.stopPropagation();
        onCityClick(name);
      }
      }
      className="locations__item">
        <a className={`locations__item-link tabs__item ${state ? `tabs__item--active` : ``} `}>
          <span>{name}</span>
        </a>
      </li>
    </>);
  }
}

City.propTypes = {
  name: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default City;

const withDropdown = (Component) => {
  class Dropdown extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isDropdownOpen: false,
        selectProperty: null,
      };
    }

    render() {
      return <Component
        {...this.props}
        isDropdownOpen={this.state.isDropdownOpen}
        selectProperty={this.state.selectProperty}
        onDropdownClick={() => {
          const {isDropdownOpen} = this.state;
          this.setState(() => ({
            isDropdownOpen: !isDropdownOpen,
          }));
        }}
        onChangeProperty={(property) => {
          this.setState(() => ({
            selectProperty: property,
          }));
        }}
      />;
    }
  }

  return Dropdown;
};

export default withDropdown;

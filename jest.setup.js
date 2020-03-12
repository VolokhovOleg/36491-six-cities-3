import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

window.renderer = require(`react-test-renderer`);
window.shallow = shallow;
window.React = React;
window.PropTypes = require(`prop-types`);
window.PureComponent = React.PureComponent;
window.memo = React.memo;

Enzyme.configure({adapter: new Adapter()});

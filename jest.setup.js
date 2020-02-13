import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

window.renderer = require(`react-test-renderer`);
window.shallow = shallow;
window.React = require(`react`);
window.PropTypes = require(`prop-types`);

Enzyme.configure({adapter: new Adapter()});

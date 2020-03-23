import {combineReducers} from 'redux';
import {reducer as hotels} from './hotels/hotels';
import {reducer as map} from './map/map';
import {reducer as reviews} from './reviews/reviews';
import {reducer as screens} from './screens/screens';
import {reducer as user} from './user/user';
import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.HOTELS]: hotels,
  [NameSpace.MAP]: map,
  [NameSpace.REVIEWS]: reviews,
  [NameSpace.SCREENS]: screens,
  [NameSpace.USER]: user,
});

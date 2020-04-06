import {Route, Redirect} from 'react-router-dom';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../reducer/user/user';
import {connect} from 'react-redux';
import {propTypes} from './prop-types';

const PrivateRoute = ({children, rest, authorizationStatus}) =>
  <Route
    {...rest}
    render={() =>
      authorizationStatus === AuthorizationStatus.AUTH
        ? children
        : <Redirect to='/login'/>
    }
  />;

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

PrivateRoute.propTypes = propTypes;

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);

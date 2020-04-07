import {Route, Redirect} from 'react-router-dom';
import {propTypes} from './prop-types';

const PrivateRoute = (props) => {
  const {render, path, require, to, exact} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          require ? render(props) : <Redirect to={to} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;

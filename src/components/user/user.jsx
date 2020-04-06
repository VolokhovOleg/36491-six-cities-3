import {Link} from 'react-router-dom';
import {propTypes} from '../user/prop-types';
import {connect} from 'react-redux';
import {getUser} from '../../reducer/user/selectors';

const User = ({user}) => {
  return <>
    <Link to={`/login`} className="header__nav-link header__nav-link--profile">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      {
        !user.email
          && <span className="header__user-name user__name">Sign In</span>
          || <span className="header__user-name user__name">{user.email}</span>
      }
    </Link>
  </>;
};


User.propTypes = propTypes;

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export {User};
export default connect(mapStateToProps)(User);

import {Operation as UserOperation, AuthorizationStatus} from '../../reducer/user/user';
import User from '../../components/user/user';
import {connect} from 'react-redux';
import {propTypes} from './prop-types';
import {Link, Redirect} from 'react-router-dom';
import {getAuthorizationStatus} from '../../reducer/user/selectors';

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._email = React.createRef();
    this._password = React.createRef();
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {submitForm} = this.props;
    submitForm({
      email: this._email.current.value,
      password: this._password.current.value,
    });
  }

  render() {
    const {authorizationStatus} = this.props;
    return <>
      {authorizationStatus === AuthorizationStatus.AUTH
        ? <Redirect to='/' />
        : <div className="page page--gray page--login">
          <header className="header">
            <div className="container">
              <div className="header__wrapper">
                <div className="header__left">
                  <Link to='/' className="header__logo-link header__logo-link--active">
                    <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
                  </Link>
                </div>
                <nav className="header__nav">
                  <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <User />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <section className="login">
                <h1 className="login__title">Sign in</h1>
                <form
                  onSubmit={this._handleSubmit}
                  className="login__form form" action="#" method="post">
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">E-mail</label>
                    <input
                      ref={this._email}
                      className="login__input form__input" type="email" name="email" placeholder="Email" required />
                  </div>
                  <div className="login__input-wrapper form__input-wrapper">
                    <label className="visually-hidden">Password</label>
                    <input
                      ref={this._password}
                      className="login__input form__input" type="password" name="password" placeholder="Password" required />
                  </div>
                  <button className="login__submit form__submit button" type="submit">Sign in</button>
                </form>
              </section>
            </div>
          </main>
        </div>}
    </>;
  }
}

Login.propTypes = propTypes;

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitForm(data) {
    dispatch(UserOperation.login(data));
  },
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

import {propTypes} from './prop-types';
import {connect} from 'react-redux';
import {Operation as ReviewOperation, reviewLength} from '../../reducer/reviews/reviews';
import {getCardDetailsID} from '../../reducer/data/selectors';

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._form = React.createRef();
    this._comment = React.createRef();
    this._submitBtn = React.createRef();
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    const {submitForm, id} = this.props;
    submitForm({
      comment: this._comment.current.value,
      rating: [...this._form.current.elements].find((item) => item.checked).value,
    }, id);
  }

  _checkValid() {
    return this._comment.current.value.length >= reviewLength.MIN
      && this._comment.current.value.length <= reviewLength.MAX
      && [...this._form.current.elements].some((item) => item.checked);
  }

  _handleChange() {
    this._submitBtn.current.disabled = !this._checkValid();
  }

  render() {
    return <>
      <form
        ref={this._form}
        onSubmit={this._handleSubmit}
        onChange={this._handleChange}
        className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input
            className="form__rating-input visually-hidden" name="rating" defaultValue={5} id="5-stars"
            type="radio"/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden" name="rating" defaultValue={4} id="4-stars"
            type="radio"/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden" name="rating" defaultValue={3} id="3-stars"
            type="radio"/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden" name="rating" defaultValue={2} id="2-stars"
            type="radio"/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
          <input
            className="form__rating-input visually-hidden" name="rating" defaultValue={1} id="1-star"
            type="radio"/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star"/>
            </svg>
          </label>
        </div>
        <textarea
          ref={this._comment}
          className="reviews__textarea form__textarea" id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={``}/>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            ref={this._submitBtn}
            className="reviews__submit form__submit button" type="submit" disabled
          >Submit</button>
        </div>
      </form>
    </>;
  }
}

ReviewForm.propTypes = propTypes;

const mapStateToProps = (state) => ({
  id: getCardDetailsID(state),
});

const mapDispatchToProps = (dispatch) => ({
  submitForm(data, id) {
    dispatch(ReviewOperation.sendReview(data, id));
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);

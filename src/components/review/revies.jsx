import {convertRating} from '../../utils';
import moment from 'moment';

const Review = ({text, userRate, userName, date, id})=> {
  return <>
    <li className="reviews__item" id={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width={54} height={54} alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: convertRating(userRate)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={`${moment(date).format(`YYYY-MM-DD`)}`}>{`${moment(date).format(`MMMM YYYY`)}`}</time>
      </div>
    </li>
  </>;
};

Review.propTypes = {
  text: PropTypes.string.isRequired,
  userRate: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  date: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
};

export default Review;

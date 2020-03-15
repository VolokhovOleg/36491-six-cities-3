import {convertRating} from '../../utils';
import {propTypes} from './prop-types';
import moment from 'moment';

// eslint-disable-next-line react/display-name
const Review = memo(({text, userRate, userName, date, id, avatar, userID})=> {
  return <>
    <li className="reviews__item" id={id}>
      <div className="reviews__user user" id={userID}>
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width={54} height={54} alt="Reviews avatar"/>
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
});

Review.propTypes = propTypes;

export default Review;

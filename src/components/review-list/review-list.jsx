import Review from '../review/revies';
import {propTypes} from './prop-types';
import {getSortedReviews} from '../../reducer/reviews/selectors';
import {getAuthorizationStatus} from '../../reducer/user/selectors';
import {AuthorizationStatus} from '../../reducer/user/user';
import {connect} from 'react-redux';
import ReviewForm from '../review-form/review-form';

// eslint-disable-next-line react/display-name
const ReviewList = memo(({reviews, authorizationStatus}) => {

  return <>
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map(({text, userRate, userName, date, id, avatar, userID}, index) => {
            return <Review
              key={id + index}
              text={text}
              userRate={userRate}
              userName={userName}
              date={date}
              avatar={avatar}
              userID={userID}
              id={id}
            />;
          })
        }
      </ul>
      {
        authorizationStatus === AuthorizationStatus.AUTH
        && <ReviewForm />
      }
    </section>
  </>;
});

const mapStateToProps = (state) => ({
  reviews: getSortedReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
});

ReviewList.propTypes = propTypes;

export {ReviewList};
export default connect(mapStateToProps)(ReviewList);

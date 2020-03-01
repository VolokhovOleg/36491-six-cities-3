import Revies from './revies';

const review = {
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  userRate: 4,
  userName: `Max`,
  date: new Date(Date.now()),
  id: `1`,
};

const {text, userRate, userName, date, id} = review;

it(`<Revies /> snapshot`, () => {
  const tree = renderer
    .create(<Revies
      key={id}
      text={text}
      userRate={userRate}
      userName={userName}
      date={date}
      id={id}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

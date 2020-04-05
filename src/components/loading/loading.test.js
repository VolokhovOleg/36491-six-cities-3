import Loading from './loading';

it(`<Loading /> snapshot`, () => {
  const tree = renderer
    .create(<Loading />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

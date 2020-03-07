import EmptyMain from './empty-main';

it(`<EmptyMain /> snapshot`, () => {
  const tree = renderer
    .create(<EmptyMain />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

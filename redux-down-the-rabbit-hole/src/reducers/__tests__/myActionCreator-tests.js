import makeActionCreator from '../myActionCreator';

describe('myActionCreator', () => {
  it('tests simple action with no parameters', () => {

    const SIMPLE_ACTION = 'Simple_Action';
    expect(makeActionCreator(SIMPLE_ACTION))
      .toEqual({ type: 'SIMPLE_ACTION' });
  });

  it('tests simple action', () => {
    const sampleAction = makeActionCreator('SAMPLE_ACTION', "id");
    expect(sampleAction(1)).toEqual({ type: 'SAMPLE_ACTION', id: 1});
  });

  it('tests more complex action', () => {
    const sampleAction = makeActionCreator(
      'ACTION',
      'id',
      'name',
      'title',
      'favorite_food');
    const expectedAction = {
      type: 'ACTION',
      id: 1,
      name: 'bob',
      title: 'sampleTitle',
      favorite_food: 'sushi'
    };
    expect(sampleAction(1, 'bob', 'sampleTitle', 'sushi'))
      .toEqual(expectedAction);
  });
});

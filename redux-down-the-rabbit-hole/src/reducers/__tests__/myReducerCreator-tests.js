import myReducerCreator from '../myReducerCreator';
import makeActionCreator from '../myActionCreator';

describe('myReducer creator', () => {
  const handlers = {
    'INCREMENT': (state, action) => ({
      ...state,
      value: state.value + action.value
    }),
    'DECREMENT': (state, action) => ({
      ...state,
      value: state.value - action.value
    })
  };

  const incrementAction = makeActionCreator('INCREMENT', 'value');
  const decrementAction = makeActionCreator('DECREMENT', 'value');
  const reducer = myReducerCreator({ value: 10 }, handlers);

  it('INCREMENT action testing custom reducer', () => {
    const expectedState = { value: 30 };
    const nextState =
      reducer(undefined, incrementAction(20));
    expect(nextState).toEqual(expectedState);
  });

  it('DECREMENT action testing custom reducer', () => {
    const expectedState = { value: 10 };
    const nextState =
      reducer({ value: 30 }, decrementAction(20));
    expect(nextState).toEqual(expectedState);
  });
});

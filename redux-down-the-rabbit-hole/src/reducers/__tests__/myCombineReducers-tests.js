import myCombineReducer from '../myCombineReducers';
import makeActionCreator from '../myActionCreator';
import { todos } from '../todo/todoReducer';
import visibility, { SHOW_ALL_COMPLETED } from '../todo/visibilityReducer';

describe('myCombineReducers', () => {
  it('combines two reducers', () => {
    const result = myCombineReducer({ todos, visibility });
    const action = makeActionCreator(SHOW_ALL_COMPLETED);
    let nextState = result(undefined, action);
    expect(nextState).toEqual({
      todos: [],
      visibility: SHOW_ALL_COMPLETED
    });

    const todoAction = makeActionCreator('ADD_TODO', 'id', 'payload');
    nextState = result(nextState, todoAction(0, 'test'));
    expect(nextState).toEqual({
      todos: [{
        id: 0,
        payload: 'test',
        completed: false
      }],
      visibility: SHOW_ALL_COMPLETED
    });
  });
});

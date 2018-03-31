import { todos } from '../todoReducer';
import { createStore } from 'redux';
import { myCreateStore } from '../../myRedux';
import { makeActionCreator } from '../../myActionCreator';

describe('todo', () => {
  const addTodoAction = makeActionCreator('ADD_TODO', 'id', 'payload');
  const removeTodoAction = makeActionCreator('REMOVE_TODO', 'id');

  it('exists', () => {
    const stateBefore = [];
    const action = addTodoAction(0, "home-made redux");
    const stateAfter = [{
      id: 0,
      payload: "home-made redux",
      completed: false
    }];

    expect(todos(stateBefore, action))
      .toEqual(stateAfter);
  });

  it('testing create store with regular redux', () => {
    const store = createStore(todos);
    const action = addTodoAction(0, "home-made redux");
    const expectedState = [{
      id: 0,
      payload: 'home-made redux',
      completed: false
      }];
    store.dispatch(action);
    expect(store.getState()).toEqual(expectedState);
  });

  it('testing create store with my redux', () => {
    const action = addTodoAction(0, "home-made redux");
    const store = myCreateStore(todos);
    const expectedState = [{
      id: 0,
      payload: 'home-made redux',
      completed: false
      }];
    store.dispatch(action);
    expect(store.getState()).toEqual(expectedState);
  });

  it('testing remove todo with my redux', () => {
    const makeObject =
      (...keys) =>
      (...values) =>
      keys.reduce((obj, key, index) => ({
        ...obj, [key]: values[index]
      }), {});
    const item = makeObject('id', 'payload', 'completed');

    const store = myCreateStore(todos, []);
    store.dispatch(addTodoAction(0, "home-made redux"));
    store.dispatch(addTodoAction(1, "another action"));
    store.dispatch(addTodoAction(2, "last payload"));
    expect(store.getState()).toEqual([
      item(0, "home-made redux", false),
      item(1, "another action", false),
      item(2, "last payload", false)]);
    store.dispatch(removeTodoAction(1));
    expect(store.getState()).toEqual([
      item(0, "home-made redux", false),
      item(2, "last payload", false)]);
  });
});


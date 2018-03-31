import { myReducerCreator } from '../myReducerCreator';

export const todo = myReducerCreator({}, {
  'ADD_TODO': (_, action) => ({
    id: action.id,
    payload: action.payload,
    completed: false
  })
});

export const todos = myReducerCreator([], {
  'ADD_TODO': (state, action) => [
    ...state,
    todo(undefined, action)
  ],
  'REMOVE_TODO': (state, action) =>
    state.filter(x => x.id !== action.id)
});

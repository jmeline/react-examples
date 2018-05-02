import myReducerCreator from '../myReducerCreator';

export const todos = myReducerCreator([], {
  'ADD_TODO': (state, action) => [
    ...state, {
    id: action.id,
    payload: action.payload,
    completed: false
  }],
  'REMOVE_TODO': (state, action) =>
    state.filter(todo => todo.id !== action.id),
  'TOGGLE_TODO': (state, action) => state.map(todo =>
    todo.id === action.id
      ? { ...todo, completed: !todo.completed }
      : todo)
});

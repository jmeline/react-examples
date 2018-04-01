import myReducerCreator from '../myReducerCreator';

export const todos = myReducerCreator([], {
  'ADD_TODO': (state, action) => [
    ...state, {
    id: action.id,
    payload: action.payload,
    completed: false
  }],
  'REMOVE_TODO': (state, action) =>
    state.filter(x => x.id !== action.id),
  'TOGGLE_TODO': (state, action) => state.map(x =>
    x.id === action.id
      ? { ...x, completed: !x.completed }
      : x)
});

import myReducerCreator from '../myReducerCreator';

const identity = x => (state, action) => x;

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_ALL_COMPLETED = 'SHOW_ALL_COMPLETED';
export const SHOW_ALL_INCOMPLETED = 'SHOW_ALL_INCOMPLETED';
export const HIDE_ALL = 'HIDE_ALL';

const visibility = myReducerCreator(SHOW_ALL, {
  SHOW_ALL:             identity(SHOW_ALL),
  SHOW_ALL_COMPLETED:   identity(SHOW_ALL_COMPLETED),
  SHOW_ALL_INCOMPLETED: identity(SHOW_ALL_INCOMPLETED),
  HIDE_ALL:             identity(HIDE_ALL)
})

export default visibility;

import visibility, {
  SHOW_ALL,
  SHOW_ALL_COMPLETED,
  SHOW_ALL_INCOMPLETED,
  HIDE_ALL
} from '../visibilityReducer';
import makeActionCreator from '../../myActionCreator';

describe('visibility reducer', () => {
  it('SHOW_ALL', () => {
    expect(visibility(undefined, {}))
      .toBe(SHOW_ALL);
  });
  it('SHOW_ALL_COMPLETED', () => {
    const action = makeActionCreator(SHOW_ALL_COMPLETED);
    expect(visibility(undefined, action))
      .toBe(SHOW_ALL_COMPLETED);
  });
  it('SHOW_ALL_INCOMPLETED', () => {
    const action =
      makeActionCreator(SHOW_ALL_INCOMPLETED);
    expect(visibility(undefined, action))
      .toBe(SHOW_ALL_INCOMPLETED);
  });
  it('HIDE_ALL', () => {
    const action =
      makeActionCreator(HIDE_ALL);
    expect(visibility(undefined, action))
      .toBe(HIDE_ALL);
  });
});

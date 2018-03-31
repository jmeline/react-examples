const SHOW_ALL = 'SHOW_ALL';
const HIDE_ALL = 'HIDE_ALL';

const visibility = (state = SHOW_ALL, action) => {
  case SHOW_ALL:
    return SHOW_ALL;
  case HIDE_ALL:
    return HIDE_ALL;
  default:
    return state;
};

export default visibility;

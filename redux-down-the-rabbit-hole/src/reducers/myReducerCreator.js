export default function (initialState, handlers) {
  return function (state = initialState, action) {
    return (Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state);
  }
};

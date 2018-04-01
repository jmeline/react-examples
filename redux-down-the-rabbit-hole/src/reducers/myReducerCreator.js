export default function (initialState, handlers) {
  return function (state = initialState, action) {
    return (handlers.hasOwnProperty(action.type)
      ? handlers[action.type](state, action)
      : state);
  }
};

// export function myReducer (initialState, handlers) {
//   return function reducer(state = initialState, action) {
//     return handlers.hasOwnProperty(action.type)
//       ? handlers[action.type](state, action)
//       : state;
//   }
// };

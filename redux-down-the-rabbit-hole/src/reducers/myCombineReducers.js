// this is pretty neat
export default function(reducers) {
  return function(state = {}, action) {
    return Object.keys(reducers)
      .reduce((nextState, key) => ({
        ...nextState,
        [key]: reducers[key](state[key], action)
      }), {})
  }
};

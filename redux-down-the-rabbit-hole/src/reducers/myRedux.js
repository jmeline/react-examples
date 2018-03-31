const myCreateStore = (reducer, preloadedState) => {

  let currentState = preloadedState;
  let listeners = [];

  const getState = () => currentState;

  const dispatch = action => {
    currentState = reducer(currentState, action);
    listeners.forEach(listeners => listeners());
    return action;
  };

  const subscribe = listener => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l != listener);
    }
  };

  dispatch({}); // call dispatch in order to generate the initial state

  return { getState, dispatch, subscribe };
};

export { myCreateStore };

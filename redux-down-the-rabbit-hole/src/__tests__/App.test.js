import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('does compose', () => {
  const compose = (...funcs) => {
    if (funcs.length === 0) {
      return arg => arg;
    }
    if (funcs.length === 1) {
      return funcs[0];
    }
    return funcs.reduce((a, b, index) => (...args) => {
      console.log(index, a, b, ...args);
      return a(b(...args));
    });
  };

  const add = (x, y) => x + y;
  const double = x => x * x;
  const triple = x => x * x * x;

  const composedFn = compose(double, triple, add);
  console.log(composedFn)
  const func = composedFn(1,2);
  const func2 = double(triple(add(1,2)));
  console.log(func);
  expect(func).toBe(func2);
})

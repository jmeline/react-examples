import React, { PureComponent } from 'react';
import logo from './logo.svg';

const appText = `
  Normally, Javascript expressions inserted in JSX will evaluate to a string, a React element, or a list of those things. However, <code>props.children</code> works just like any other props in that it can pass any sort of data, not just the sorts that <b> React </b> knows how to render. For Example, if you have a custom component, you can have it take a callback as props.children.`;

const Repeat = props =>
  <div>
    {
      Array(props.numTimes)
        .fill(1)
        .map((x, y) => props.children(x + y))
    }
  </div>;


class Example extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Functions as Children</h1>
        </header>
        <p className="App-intro">
          {appText}
        </p>
        <Repeat numTimes={1000}>
        {
          (index) =>
            <div key={index}>
              This is item {index} in the list
            </div>
        }
        </Repeat>
      </div>
    );
  }
}

export default Example;

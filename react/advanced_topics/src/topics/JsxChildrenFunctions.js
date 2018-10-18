import React, { PureComponent } from 'react';

const appText = <div>
  Normally, Javascript expressions inserted in JSX will evaluate to a string, a React element, or a list of those things. However, <b> props.children </b> works just like any other props in that it can pass any sort of data, not just the sorts that <b> React </b> knows how to render. For Example, if you have a custom component, you can have it take a callback as props.children.
  </div>;

const Repeat = props =>
  <div>
    {
      Array(props.numTimes)
        .fill(1)
        .map((x, y) => props.children(x + y))
    }
  </div>;

class JsxChildrenFunctions extends PureComponent {
  render() {
    return (
      <div>
        <div className="App-intro">
          {appText}
        </div>
        <Repeat numTimes={10}>
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

export default JsxChildrenFunctions;

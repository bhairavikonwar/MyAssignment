import _ from 'lodash';
import React from 'react';

/*function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpackuse'], ' ');

  return element;
   return (
            <div>
                <h2>Users</h2>
            </div>
                       
        );
}

document.body.appendChild(component());
*/

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

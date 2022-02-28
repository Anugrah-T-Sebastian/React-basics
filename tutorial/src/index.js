import React from 'react'
import ReactDOM from 'react-dom';

//JSX rule
// return single element
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function Greeting() {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement(
//     'div', 
//     {}, 
//     React.createElement('h1', {}, 'hello world')
//     );
// }

ReactDOM.render(<Greeting />, document.getElementById('root'));
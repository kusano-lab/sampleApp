import React, {component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Hello from './Hello';


const App = () => {
  return (
    <React.Fragment>
    <p>hello ~</p>
      <Hello />
    </React.Fragment>
  )
}

export default App;

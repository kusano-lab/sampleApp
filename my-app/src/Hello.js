import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';


const HelloA = () => {
  return <h1>HelloA</h1>;
}

const HelloB = () => {
  return <h1>HelloB</h1>;
}


const Hello = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/hello-a">HelloA</Link></li>
          <li><Link to="/hello-b">HelloB</Link></li>
        </ul>
        <Route path="hello-a" component={HelloA} />
        <Route path="hello-b" component={HelloB} />
      </div>
    </BrowserRouter>
  );
}

export default Hello;

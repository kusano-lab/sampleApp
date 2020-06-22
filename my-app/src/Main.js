import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './Main.css'
import Todo from './sample/01/Todo'

const Sample01 = () => {
  //DBなどからデータを取得する。仮で直書き
  const todosList = [
    {id: uuid(), title: 'Task00', isDone: false},
    {id: uuid(), title: 'Task01', isDone: true},
    {id: uuid(), title: 'Task02', isDone: false}
  ]

  return (
    <Todo todosList={todosList} />
  );
}

// const HelloA = () => {
//   return (
//     <div>
//       <h1>HelloA</h1>
//     </div>
//   );
// }

const Top = () => {
  return (
    <ul className="grid">
      {/* <li class="grid-col"><Link to="#"><img src="#" /></Link></li> */}
    </ul>
  );
}

const Main = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="nav">
          <h1>React sample</h1>
          <ul>
            <li><Link to="/">top</Link></li>
            <li><Link to="/sample01">todo app</Link></li>
            {/* <li><Link to="/hello-a">HelloA</Link></li> */}
          </ul>
        </div>
        <div className="content">
          <Route exact path="/" component={Top} />
          <Route exact path="/sample01" component={Sample01} />
          {/* <Route path="/hello-a" component={HelloA} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main;

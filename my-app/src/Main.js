import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './Main.css'
import Todo from './sample/01/Todo'
import Countup from './sample/02/Countup'
import Timer from './sample/02/Timer'
import {default as Counter03} from './sample/03/Countup'
import {default as Timer03} from './sample/03/Timer'
import {default as Todo4} from './sample/04/Todo'
import {default as Counter05} from './sample/05/Counter.tsx'

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

const Sample02 = () => {
  return (
    <>
      <Countup />
      <hr />
      <Timer />
    </>
  )
}

const Sample03 = () => {
  return (
    <>
      <Counter03 />
      <hr />
      <Timer03 />
    </>
  )
}

const Sample04 = () => {
  return (
    <>
      <Todo4 />
    </>
  )
}

const Sample05 = () => {
  return (
    <>
      <Counter05 />
    </>
  )
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
            <li><Link to="/sample02">Count/Timer app</Link></li>
            <li><Link to="/sample03">Count/Timer redux app</Link></li>
            <li><Link to="/sample04">todo app with redux toolkit</Link></li>
            <li><Link to="/sample05">Counter with TypeScript</Link></li>
            {/* <li><Link to="/hello-a">HelloA</Link></li> */}
          </ul>
        </div>
        <div className="content">
          <Route exact path="/" component={Top} />
          <Route exact path="/sample01" component={Sample01} />
          <Route exact path="/sample02" component={Sample02} />
          <Route exact path="/sample03" component={Sample03} />
          <Route exact path="/sample04" component={Sample04} />
          <Route exact path="/sample05" component={Sample05} />
          {/* <Route path="/hello-a" component={HelloA} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main;

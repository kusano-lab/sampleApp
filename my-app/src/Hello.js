import React, {component} from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';


const HelloTop = () => {
  return <h1>hello top page!</h1>;
}

const HelloA = () => {
  return (
    <div>
      <h1>HelloA</h1>
    </div>
  );
}

const HelloB = () => {
  return (
    <div>
      <h1>HelloB</h1>
    </div>
  );
}


const Blog = (props) => {
  const {id} = props.match.params
  return (
    <div>
      <p>ブログ記事のIDは「{id}」です</p>
    </div>
  )
}

const Article = (props) => {
  const {tag, id} = props.match.params
  return (
    <div>
      <p>タグ「{tag}」で、ID「{id}」の記事</p>
    </div>
  )
}

const User = (props) => {
  const {id} = props
  return (
    <div>
      <p>こんにちは、{id}さん</p>
    </div>
  )
}

const Hello = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">top</Link></li>
          <li><Link to="/hello-a">HelloA</Link></li>
          <li><Link to="/hello-b">HelloB</Link></li>
          <li><Link to="/blog/1">ブログ記事1件目</Link> </li>
          <li><Link to="/article/news/123">ニュース123</Link></li>
          <li><Link to="/user">設定</Link></li>
        </ul>
        <Route exact path="/" component={HelloTop} />
        <Route path="/hello-a" component={HelloA} />
        <Route path="/hello-b" component={HelloB} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/article/:tag/:id" component={Article} />
        <Route path="/user" render={() => <User id={'12345'} />} />
      </div>
    </BrowserRouter>
  );
}

export default Hello;

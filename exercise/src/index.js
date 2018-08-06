import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import UserList from './routes/UserList';
import UserDetail from './routes/UserDetail';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/user-list"  component={UserList}/>
      <Route path={'/user-detail/:id'}  component={UserDetail} />
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

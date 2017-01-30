import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'prismjs/themes/prism.css';
import 'prismjs/prism';

import { AppComponent } from './app/app.component';
import { IntroComponent } from './app/intro/intro.component';
import { ShallowComponent } from './app/shallow/shallow.component';
import { MountComponent } from './app/mount/mount.component';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={IntroComponent} />
      <Route path="/shallow" component={ShallowComponent} />
      <Route path="/mount" component={MountComponent} />
    </Route>
  </Router>,
  document.getElementById('root')
);

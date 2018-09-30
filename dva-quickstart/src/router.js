import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import UserRoute from './routes/User';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/product" exact component={Products} />
        <Route path="/user" exact component={UserRoute} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

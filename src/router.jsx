import { Router, Route, Link, browserHistory } from 'react-router';
import React  from 'react';
import layout from './layout.jsx';
import about  from './about.jsx';

module.exports = function () {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={layout}>
        <Route path="about" components={{page: about}} data={{name: 'test'}}>
        </Route>
      </Route>
    </Router>
  );
};

// Dependencies:
import { Router, Route, hashHistory } from 'react-router';
import React  from 'react';

// Pages:
import layout from './layout.jsx';
import about  from './about.jsx';

module.exports = function (mediator) {

  var routes = {
    path: '/',
    component: layout,
    mediator: mediator,
    childRoutes: [
      {
        name: 'About',
        path: 'about',
        mediator: mediator,
        component: {page: about}
      }
    ]
  };

  return () => {
    return (
       <Router history={hashHistory} routes={routes} />
    );
  };
};

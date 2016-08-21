// Dependencies:
import { Router, Route, browserHistory } from 'react-router';
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
        path: 'about',
        mediator: mediator,
        component: {page: about}
      }
    ]
  };

  console.log(mediator);

  return () => {
    return (
       <Router history={browserHistory} routes={routes} />
    );
  };
};

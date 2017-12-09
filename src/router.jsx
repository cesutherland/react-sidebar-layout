// Dependencies:
import { BrowserRouter as Router } from 'react-router-dom';
import React  from 'react';
import layout from './layout.jsx';
import buildRoutes from './routes';

// Pages:

module.exports = function (mediator) {
  const routes = buildRoutes(mediator);
  return (
     <Router>
       {layout(mediator, routes)}
     </Router>
  );
};

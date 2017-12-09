// Dependencies:
import { Router, Route, hashHistory } from 'react-router';
import React  from 'react';

// Pages:
import routes from './routes';

module.exports = function (mediator) {
  return (
     <Router history={hashHistory} routes={routes(mediator)} />
  );
};

import { browserHistory, Router, Route, Link } from 'react-router'
import React from 'react';

module.exports = ({page, data, mediator}) => (
  <div className="container">
    {console.log(data, mediator)}
    <div className="row">
      <div className="col-sm-2">
        <div>Hello World</div>
        <hr />
        <ul className="unstyled">
          <li><Link to={`/`} activeClassName="active">Home</Link></li>
          <li><Link to={`/about`} activeClassName="active">About</Link></li>
        </ul>
      </div>
      <div className="col-sm-10">
        {page || <h1>Welcome</h1>}
      </div>
    </div>
  </div>
);

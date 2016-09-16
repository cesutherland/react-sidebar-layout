import React  from 'react';
import { Link, IndexLink } from 'react-router'

module.exports = ({page, route: { mediator }}) => (
  <div className="app sidebar-app">
    <div className={mediator.sidebar ? 'sidebar sidebar-expanded' : 'sidebar'}>
      <div className="sidebar-header">
        <h2>
          <span className="glyphicon glyphicon-chevron-left sidebar-toggle" onClick={function () { mediator.sidebar = !mediator.sidebar; mediator.render(); }}></span>
          App Shell
        </h2>
      </div>
      <div className="sidebar-content">
        <ul className="list-unstyled">
          <li><IndexLink to={`/`} activeClassName="active">Home</IndexLink></li>
          <li><Link to={`/about`} activeClassName="active">About</Link></li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <a>Logout</a>
      </div>
    </div>
    <div className="sidebar-toggle" onClick={function () { mediator.sidebar = !mediator.sidebar; mediator.render(); }}>
      <span className="glyphicon glyphicon-menu-hamburger"></span>
    </div>
    <div className="content">
      <div className="body container-fluid">
        <div className="row">
          <div className="col-sm-12">
            {page || <h1>Welcome</h1>}
          </div>
        </div>
      </div>
    </div>
  </div>
);

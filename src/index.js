import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router';
import router from './router.jsx';


var mediator = {
  sidebar: false,
  render: function () {
    render(r(mediator), document.getElementById('calendar'));
  }
};

var r = router(mediator);

mediator.render();

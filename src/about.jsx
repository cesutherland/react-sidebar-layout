import React  from 'react';

module.exports = (mediator) => () => (
  <div>
    <h1>About</h1>
    <div className="hi">This is our thing! {mediator.name}</div>
  </div>
);

import React  from 'react';

module.exports = ({route: { mediator }}) => {
  return (
    <div>
      <h1>About</h1>
      <div className="hi">This is our thing! {mediator.name}</div>
    </div>
  )
};
